import { NextResponse } from 'next/server'

export function middleware(request) {
	// return NextResponse.redirect() e.g.

	return NextResponse.next()
}

export const config = {
	matcher: '/news',
}
