import { NextResponse } from "next/server";

export async function GET() {
  const survey = {
    image:
      "https://www.voxco.com/wp-content/uploads/2021/04/students-feedback-survey-cvr.jpg.webp",
    question: "How likely are you to recommend Survey Apoli to a friend?",
  };

  return new NextResponse(
    `
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">
        <style>
          * {
            font-family: 'Outfit', sans-serif;
          }
        </style>
      </head>
    <body>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div class="mx-auto w-full max-w-lg">
        <div class="flex justify-center mb-3">
          <!--<img src=${survey.image} alt="" class="w-16 h-16" />  -->
        </div>
        <form action="http://localhost:3000/api/survey" method="post" id="npsform">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
          <div class="step" id="step1">
            <h2 class="mx-auto max-w-xs text-center text-xl font-bold">
              ${survey.question}
            </h2>
            <div class="mt-4 flex gap-5 justify-center">
              <div class="grow w-full">
                <input type="radio" id="one" name="ces" value="1" class="navigate peer hidden" data-step="2" />
                <label for="one" class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border bg-white text-lg font-medium shadow hover:border-gray-400 peer-checked:border-indigo-500 peer-checked:text-indigo-500">1</label>
              </div>
    
              <div class="grow w-full">
                <input type="radio" id="two" name="ces" value="2" class="navigate peer hidden" data-step="2" />
                <label for="two" class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border bg-white text-lg font-medium shadow hover:border-gray-400 peer-checked:border-indigo-500 peer-checked:text-indigo-500">2</label>
              </div>
    
              <div class="grow w-full">
                <input type="radio" id="three" name="ces" value="3" class="navigate peer hidden" data-step="2" />
                <label for="three" class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border bg-white text-lg font-medium shadow hover:border-gray-400 peer-checked:border-indigo-500 peer-checked:text-indigo-500">3</label>
              </div>

              <div class="grow w-full">
                <input type="radio" id="four" name="ces" value="4" class="navigate peer hidden" data-step="2" />
                <label for="four" class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border bg-white text-lg font-medium shadow hover:border-gray-400 peer-checked:border-indigo-500 peer-checked:text-indigo-500">4</label>
              </div>

              <div class="grow w-full">
                <input type="radio" id="five" name="ces" value="5" class="navigate peer hidden" data-step="2" />
                <label for="five" class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border bg-white text-lg font-medium shadow hover:border-gray-400 peer-checked:border-indigo-500 peer-checked:text-indigo-500">5</label>
              </div>

              <div class="grow w-full">
                <input type="radio" id="six" name="ces" value="6" class="navigate peer hidden" data-step="2" />
                <label for="six" class="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border bg-white text-lg font-medium shadow hover:border-gray-400 peer-checked:border-indigo-500 peer-checked:text-indigo-500">6</label>
              </div>

              <div class="grow w-full">
                <input type="radio" id="seven" name="ces" value="7" class="navigate peer hidden" data-step="2" />
                <label for="seven" class="flex h-10 w-full cursor-pointer items-center justify-center rounded-full border bg-white text-lg font-medium shadow hover:border-gray-400 peer-checked:border-indigo-500 peer-checked:text-indigo-500">7</label>
              </div>
            </div>
            <div class="flex justify-between mt-2 text-gray-500 text-sm">
              <span>Less Likely</span>
              <span>Very Likely</span>
            </div>
          </div>
    
          <div class="step hidden" id="step2">
            <h2 class="mx-auto text-center text-xl font-bold">
              Can you tell us a bit more about your score?
            </h2>
    
            <div class="mt-4">
              <textarea name="comments" rows="3" class="w-full rounded-md border bg-white  shadow border-gray-400 focus:border-indigo-500 "></textarea>
            </div>
            
            <div class="relative">
              <a href="#!" class="absolute top-0 left-0 navigate underline text-gray-500 text-sm" data-step="1">
                Go back
              </a>
            </div>
    
            <div class="flex justify-center mt-2">
              <button type="submit" class="px-10 py-2 rounded-md border bg-white text-lg font-medium shadow border-gray-400">
                Submit
              </button>
            </div>
    
            <div id="result" />
          </div>
        </form>
      </div>
    </div>
    </body>
    <script>
    const form = document.getElementById("npsform");

    /**
      * Multi-step Function to navigate
      */
    
    const navigateToFormStep = (stepNumber) => {
      form.querySelectorAll(".step").forEach((el) => {
        el.classList.add("hidden");
      });
    
      form.querySelector("#step" + stepNumber).classList.remove("hidden");
    };
    
    /**
      * Enable Navigation buttons
      */
    
    form.querySelectorAll(".navigate").forEach((nav) => {
      nav.addEventListener("click", () => {
        const stepNumber = parseInt(nav.getAttribute("data-step"));
        navigateToFormStep(stepNumber);
      });
    });
    </script>
    </html>
  `,
    { headers: { "content-type": "text/html" } }
  );
}
