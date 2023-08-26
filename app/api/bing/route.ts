import { NextResponse } from 'next/server';

const bingUrl = process.env.BING_IMAGE!;

// GET /api/bing
export async function GET() {
  try {
    const response = await fetch(bingUrl);
    const data = await response.json();
    const bingImage = `https://cn.bing.com${data.images[0].url}`;

    return NextResponse.json({ code: 200, success: true, message: '', data: bingImage });
  } catch (error) {
    return NextResponse.json({ code: 500, success: false, message: '服务器异常', data: null });
  }
}
