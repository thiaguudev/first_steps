/**
 * @param {String} email
 * @param {String} name
 * @returns void
 */
function survey({ email, name, createdAt, properties: { plan, company } }) {
  const iframe = __getIframe();
}

/**
 * @param {*} styles
 * @param {*} element
 */
function __setOverrideStyle(styles, element) {
  Object.assign(element.style, styles);
}

/**
 * @param {String} iframeName
 * @returns object
 */
function __getIframe(iframeName) {
  let iframe = window.frames[iframeName];
  return iframe || window.document.createElement("iframe");
}

/**
 * @param {String} queryString
 * @returns object
 */
function __createIframe(queryString) {
  const iframe = __getIframe();
  iframe.name = "surveyframe";
  iframe.src = `/api/surveys/template/smileys?${queryString}`;
  iframe.scrolling = "no";
  iframe.id = "surveyapoli";
  iframe.frameBorder = "0";
  iframe.height = 275;
  iframe.opacity = 0;

  __setOverrideStyle(
    {
      overflow: "hidden",
      width: "100vw",
      position: "absolute",
      left: 0,
      bottom: 0,
      zIndex: 99999,
      opacity: 0,
      transform: 'translateY(130%)',
      display: 'none'
    },
    iframe
  );

  // iframe.classList.add(
  //   "transition-all",
  //   "ease-in",
  //   "duration-1000",
  //   "opacity-0",
  //   "hidden",
  //   "ease-in",
  //   // 'animate-pulse'
  // );

  window.document.body.appendChild(iframe);

  return window.frames["surveyframe"];
}

/**
 * @returns boolean
 */
function __validateFields() {
  const frame = __getIframe("surveyframe");

  let checked = false;

  frame.document.getElementsByName("score").forEach((el) => {
    if (!el.checked) return;
    checked = true;
  });

  return checked;
}

/**
 * @param {*} body
 * @returns Promise<Response>
 */
async function __send(body) {
  return fetch("/api/surveys", {
    method: "POST",
    body,
  });
}

/**
 * @returns Promise<object>
 */
async function __identify() {
  const response = await fetch("/api/surveys");
  const data = await response.json();
  return data;
}

/**
 * @returns void
 */
async function main() {
  const survey = await __identify();
  const href = window.location.href;

  if (survey.validUrl) {
    if (survey.baseUrl !== href) return;
  }

  const queryString = new URLSearchParams(survey).toString();
  const frame = __createIframe(queryString);

  setTimeout(() => {
    __setOverrideStyle(
      {
        opacity: 100,
        display: "block",
      },
      document.getElementById("surveyapoli")
    );
  }, survey.timeToShow * 1000)
  

  frame.addEventListener("DOMContentLoaded", () => {
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
            frame.setTimeout(
              () =>
                // document.body.removeChild(
                //   document.getElementById("surveyapoli")
                // ),
                document
                  .getElementById("surveyapoli")
                  .classList.add("hidden", "opacity-0"),
              2000
            );
          });
        });
      }
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const response = await __send(new FormData(form));
      const data = await response.json();
      console.log("result1", data);
      setTimeout(() => {
        document
          .getElementById("surveyapoli")
          .classList.add("hidden", "opacity-0");
        // document.body.removeChild(document.getElementById("surveyapoli"));
      }, 2000);
    });

    /**
     * Enable navigation buttons
     */

    form.querySelectorAll(".navigate").forEach((nav) => {
      nav.addEventListener("click", () => {
        if (__validateFields()) {
          const step = nav.getAttribute("data-step");
          if (!step) return;
          navigateToFormStep(step);
        }
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
