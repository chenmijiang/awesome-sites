import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/api/:path+',
};

// 路由中间件
export function middleware(request: NextRequest) {

  return NextResponse.next();
}
