import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/api/:path+',
};

export function middleware(request: NextRequest) {
  console.log('middleware.ts: middleware() called');

  return NextResponse.next();
}
