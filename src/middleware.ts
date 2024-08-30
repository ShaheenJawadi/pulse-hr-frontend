

import { NextResponse } from 'next/server';
import { authMiddleware, isPublicPage } from './middleware/check';

import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {

  console.log('middleware');
  const deleteThis = true;
  const { pathname } = request.nextUrl;

  if (deleteThis || isPublicPage(pathname)) {
    return NextResponse.next();
  }



  return authMiddleware(request);
}
