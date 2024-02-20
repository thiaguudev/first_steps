import { NextResponse } from "next/server";

export async function GET() {
  const survey = {
    accessKey: "",
    image:
      "https://www.voxco.com/wp-content/uploads/2021/04/students-feedback-survey-cvr.jpg.webp",
    question: "How likely are you to recommend Survey Apoli to a friend?",
    leftLabel: "Less Likely",
    rightLabel: "Very Likely",
    commentMessage: "Can you tell us a bit more about your score?",
    buttonStyle: "outline",
    buttonShape: "rounded-full",
    textColor: "text-black",
  };

  return new NextResponse(
    `
    <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
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
            <div class="mt-4 flex gap-1 justify-center">
            <div class="grow w-full flex items-center justify-center hover:transform hover:scale-125 cursor-pointer transition-transform duration-150">
              <input type="radio" id="one" name="stars" value="1" class="navigate peer hidden" data-step="2" />
              <label for="one" class="cursor-pointer">
                <svg height="38px" width="38px" version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 47.94 47.94" xml:space="preserve" class="fill-white stroke-yellow-300 stroke-2 hover:fill-yellow-300">
                  <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                  C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                </svg>
              </label>
            </div>

          <div class="grow w-full flex items-center justify-center hover:transform hover:scale-125 cursor-pointer transition-transform duration-150">
            <input type="radio" id="two" name="stars" value="2" class="navigate peer hidden" data-step="2" />
            <label for="two" class="cursor-pointer">
              <svg height="38px" width="38px" version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 47.94 47.94" xml:space="preserve" class="fill-white stroke-yellow-300 stroke-2 hover:fill-yellow-300">
                <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                C22.602,0.567,25.338,0.567,26.285,2.486z"/>
              </svg>
            </label>
          </div>

              <div class="grow w-full flex items-center justify-center hover:transform hover:scale-125 cursor-pointer transition-transform duration-150">
                <input type="radio" id="three" name="stars" value="3" class="navigate peer hidden" data-step="2" />
                <label for="three" class="cursor-pointer">
                  <svg height="38px" width="38px" version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 47.94 47.94" xml:space="preserve" class="fill-white stroke-yellow-300 stroke-2 hover:fill-yellow-300">
                    <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                      c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                      c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                      c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                      c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                      C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                  </svg>
                </label>
              </div>

              <div class="grow w-full flex items-center justify-center hover:transform hover:scale-125 cursor-pointer transition-transform duration-150">
                <input type="radio" id="four" name="stars" value="4" class="navigate peer hidden" data-step="2" />
                <label for="four" class="cursor-pointer">
                  <svg height="38px" width="38px" version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 47.94 47.94" xml:space="preserve" class="fill-white stroke-yellow-300 stroke-2 hover:fill-yellow-300">
                    <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                      c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                      c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                      c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                      c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                      C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                  </svg>
                </label>
              </div>

              <div class="grow w-full flex items-center justify-center hover:transform hover:scale-125 transition-transform duration-150">
                <input type="radio" id="five" name="stars" value="5" class="navigate peer hidden" data-step="2" />
                <label for="five" class="cursor-pointer">
                  <svg height="38px" width="38px" version="1.1" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 47.94 47.94" xml:space="preserve" class="fill-white stroke-yellow-300 stroke-2 hover:fill-yellow-300">
                    <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                      c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                      c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                      c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                      c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                      C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                  </svg>
                </label>
              </div>
            </div>

            <div class="flex justify-between mt-2 text-gray-500 text-sm">
              <span>${survey.leftLabel}</span>
              <span>${survey.rightLabel}</span>
            </div>
          </div>
    
          <div class="step hidden" id="step2">
            <h2 class="mx-auto text-center text-xl font-bold">
              ${survey.commentMessage}
            </h2>
    
            <div class="mt-4">
              <textarea name="comment" rows="3" class="w-full rounded-md border bg-white  shadow border-gray-400 focus:border-indigo-500 "></textarea>
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
