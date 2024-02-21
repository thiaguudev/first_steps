const BASE_URL = "http://localhost:3000";

function __createIframe(queryString) {
  const iframe = window.document.createElement("iframe");

  iframe.name = "frame";
  iframe.src = `${BASE_URL}/api/surveys/template/smileys?${queryString}`;
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

async function __identify() {
  const response = await fetch(`${BASE_URL}/api/surveys`);
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

    frame.document.getElementsByName("score").forEach((el) => {
      console.log(el);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (survey.skipComment) {
      }
    });

    /**
     * Enable navigation buttons
     */
    form.querySelectorAll(".navigate").forEach((nav) => {
      nav.addEventListener("click", () => {
        if (survey.hasConfirmButton) return;

        const stepNumber = parseInt(nav.getAttribute("data-step"));
        navigateToFormStep(stepNumber);
      });
    });

    /**
     * Multi-step function to navigate
     */
    const navigateToFormStep = (stepNumber) => {
      form.querySelectorAll(".step").forEach((el) => {
        el.classList.add("hidden");
      });

      if (!form.querySelector("#step" + stepNumber)) {
        if (survey.thanksMessage) {
          const thanks = frame.document.getElementById("thanks");
          thanks.classList.remove("hidden");
        }
      } else {
        form.querySelector("#step" + stepNumber).classList.remove("hidden");
      }
    };
  });
}

main();
