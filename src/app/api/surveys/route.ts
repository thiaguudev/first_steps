import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";

export async function GET(req: NextRequest) {
  const survey = {
    validUrl: false,
    baseUrl: "http://localhost:3000/en/app",
    timeToShow: 2,
    image:
      "https://www.voxco.com/wp-content/uploads/2021/04/students-feedback-survey-cvr.jpg.webp",
    question: "How likely are you to recommend Survey Apoli to a friend?",
    leftLabel: "Less Likely",
    rightLabel: "Very Likely",
    commentMessage: "Can you tell us a bit more about your score?",
    buttonStyle: "outline",
    skipComment: false,
    textColor: "text-white",
    bgColor: "bg-white",
    buttonShape: "rounded-full",
    welcomeMessage: "Can i help us?",
    thanksMessage: "Thanks for your help!",
    hasConfirmButton: true,
  };

  return NextResponse.json(survey);
}

export async function POST(req: NextRequest) {
  const schema = z.object({
    access_key: z.string(),
    score: z.number(),
    comment: z.string(),
  });

  const form = await req.formData();
  const accessKey = form.get("access_key");
  const score = form.get("score");
  const comment = form.get("comment");

  console.log({ accessKey, score, comment })
  // if (!accessKey)
  //   return NextResponse.json(
  //     { success: false, error: "Access key is required" },
  //     { status: StatusCodes.UNAUTHORIZED }
  //   );

  // const result = schema.parse({ accessKey, score, comment });

  return NextResponse.json({ success: true }, { status: StatusCodes.CREATED });
}
