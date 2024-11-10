import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}
