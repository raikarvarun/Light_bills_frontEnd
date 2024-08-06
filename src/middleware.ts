import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { PUBLIC_ROUTES } from './lib/middleware/routes';

export function middleware(request: NextRequest) {
	const userToken = request.cookies.get('session')?.value;
	const {nextUrl} = request;	
	if(!userToken && !PUBLIC_ROUTES.find(route=> nextUrl.pathname.startsWith(route))) {
		return NextResponse.redirect(new URL('/login',nextUrl))
	}
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}