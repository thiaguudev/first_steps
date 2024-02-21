function __createIframe(queryString) {
  const iframe = window.document.createElement("iframe");
  iframe.name = "frame";
  iframe.src = `/api/surveys/template/smileys?${queryString}`;
  iframe.scrolling = "no";
  iframe.frameBorder = "0";
  iframe.height = 350;
  iframe.style.width = "100vw";
  iframe.style.overflow = "hidden";
  iframe.style.position = "absolute";
  iframe.style.left = 0;
  iframe.style.bottom = 0;
  iframe.style.zIndex = 9999;

  window.document.body.appendChild(iframe);

  return window.frames["frame"];
}

async function __send(body) {
  return fetch("/api/surveys", {
    method: "POST",
    body,
  });
}

async function __identify() {
  const response = await fetch("/api/surveys");
  const data = await response.json();
  return data;
}

async function main() {
  const survey = await __identify();
  const href = window.location.href;

  if (survey.validUrl) {
    if (survey.baseUrl !== href) return;
  }

  const queryString = new URLSearchParams(survey).toString();
  const frame = __createIframe(queryString);

  frame.addEventListener("DOMContentLoaded", (event) => {
    const form = frame.document.getElementById("npsform");

    if (survey.hasConfirmButton) {
      const button = form.querySelector('button[type="button"]');

      if (survey.skipComment) {
        button.setAttribute("type", "submit");
        button.setAttribute("data-step", "thanks");
      } else {
        button.setAttribute("data-step", "comment");
      }
    } else {
      frame.document.getElementsByName("score").forEach((el) => {
        el.setAttribute("data-step", survey.skipComment ? "thanks" : "comment");
      });

      if (survey.skipComment) {
        form.querySelectorAll('input[name="score"]').forEach((el) => {
          el.addEventListener("change", async () => {
            const response = await __send(new FormData(form));
            const data = await response.json();
            console.log("result2", data);
          });
        });
      }
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const response = await __send(new FormData(form));
      const data = await response.json();
      console.log("result1", data);
    });

    /**
     * Enable navigation buttons
     */
    form.querySelectorAll(".navigate").forEach((nav) => {
      nav.addEventListener("click", () => {
        const step = nav.getAttribute("data-step");
        if (!step) return;
        navigateToFormStep(step);
      });
    });

    /**
     * Multi-step function to navigate
     */
    const navigateToFormStep = (step) => {
      form.querySelectorAll(".step").forEach((el) => {
        el.classList.add("hidden");
      });

      if (form.querySelector("#step-" + step)) {
        form.querySelector("#step-" + step).classList.remove("hidden");

        if (step === "comment") form.querySelector("textarea").focus();
      }
    };
  });
}

main();
