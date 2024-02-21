async function track() {
  const response = await fetch("http://localhost:3000/api/surveys/", {
    method: "GET",
  });

  const data = await response.json();
}

async function main() {
  const iframe = window.document.createElement("iframe");
  iframe.name = "frame";
  iframe.src = "http://localhost:3000/api/surveys/template/smileys";
  iframe.scrolling = "no";
  iframe.frameBorder = "0";
  iframe.height = 350;
  iframe.style.width = "100vw";
  iframe.style.overflow = "hidden";
  iframe.style.position = 'fixed',
  iframe.style.left = 0;
  iframe.style.bottom = 0;
  iframe.style.zIndex = 9999;
  iframe.srcdoc = '<h1>Welcome</h1>'
  window.document.body.appendChild(iframe);

  console.log('survey', window.survey);

  const frame = window.frames["frame"];

  frame.addEventListener("DOMContentLoaded", (event) => {
    const form = frame.document.getElementById("npsform");

    /**
   * Enable Navigation buttons
   */
    form.querySelectorAll(".navigate").forEach((nav) => {
      nav.addEventListener("click", () => {
        const stepNumber = parseInt(nav.getAttribute("data-step"));
        navigateToFormStep(stepNumber);
      });
    });

    /**
   * Multi-step Function to navigate
   */
    const navigateToFormStep = (stepNumber) => {
      form.querySelectorAll(".step").forEach((el) => {
        el.classList.add("hidden");
      });
  
      form.querySelector("#step" + stepNumber).classList.remove("hidden");
    };
  });
}

main();
