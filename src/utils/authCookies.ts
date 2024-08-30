import nookies from 'nookies';

export function setTokenCookie(token: string): void {
  nookies.set(null, 'authToken', token, {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
}

export function destroyTokenCookie(): void {
  nookies.destroy(null, 'authToken', {
    path: '/',
  });
}

export function getTokenCookie(): string | null {
  const cookies = nookies.get(null);
  return cookies.authToken || null;
}
