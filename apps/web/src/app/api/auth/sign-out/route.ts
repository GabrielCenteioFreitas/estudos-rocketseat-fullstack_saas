import { cookies as nextCookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const cookies = await nextCookies()
  const redirectUrl = request.nextUrl.clone()

  redirectUrl.pathname = '/auth/sign-in'

  cookies.delete('token')

  return NextResponse.redirect(redirectUrl)
}
