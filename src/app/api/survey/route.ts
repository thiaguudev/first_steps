import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

export async function POST() {
  return NextResponse.json({ error: false }, { status: StatusCodes.CREATED })
}