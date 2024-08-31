import { getTokenCookie } from '@/utils/authCookies';
import { ROUTING } from '@/utils/routes';
import { NextRequest, NextResponse } from 'next/server';

export function isPublicPage(pathname: string) {
  if (
    pathname.startsWith('/auth/') ||
    pathname.startsWith('/jobs/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/logo/')

  ) {
    return true;
  }

  return false;
}


export function authMiddleware(request: NextRequest) {
  const token = getTokenCookie();

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = ROUTING.AUTH.LOGIN;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

