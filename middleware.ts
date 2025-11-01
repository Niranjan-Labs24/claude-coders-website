// middleware.ts - ROOT DIRECTORY में create करें
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if user is trying to access WordPress admin directly
  // This prevents direct access to WordPress admin without our authentication
  const isTryingToAccessWordPressAdmin = 
    request.nextUrl.href.includes('/wp-admin') && 
    !request.nextUrl.href.includes('?authenticated=true');

  if (isTryingToAccessWordPressAdmin) {
    // Redirect to our custom admin login page
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};