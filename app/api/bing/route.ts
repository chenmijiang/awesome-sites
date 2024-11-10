import { NextResponse } from "next/server";

const bingUrl = process.env.BING_IMAGE!;

// 每小时重新生成
export const revalidate = 3600;

export async function GET() {
  const response = await fetch(bingUrl);
  const data = await response.json();
  const url = `https://cn.bing.com${data.images[0].url}`;
  return NextResponse.json({ url });
}
