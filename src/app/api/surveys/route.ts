import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";

export async function GET(req: NextRequest) {
  const survey = {}
  return NextResponse.json({ error: false })
}

export async function POST(req: NextRequest) {
  const schema = z.object({
    access_key: z.string(),
    score: z.number(),
    comment: z.string()
  })

  const form = await req.formData()
  const accessKey = form.get('access_key');
  const score = form.get('score');
  const comment = form.get('comment')

  if (!accessKey)
    return NextResponse.json({ success: false, error: 'Access key is required' }, { status: StatusCodes.UNAUTHORIZED })

  console.log({ accessKey, score, comment })

  return NextResponse.json({ success: true }, { status: StatusCodes.CREATED })
}

