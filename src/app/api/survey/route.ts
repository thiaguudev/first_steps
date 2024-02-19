import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

export async function POST() {
  return NextResponse.json({ success: true }, { status: StatusCodes.CREATED })
}

export async function GET() {
  return NextResponse.json({ error: false })
}