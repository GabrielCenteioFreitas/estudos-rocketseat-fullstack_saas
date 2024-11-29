import { cookies as nextCookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getProfile } from '../http/get-profile'

export async function isAuthenticated() {
  const cookies = await nextCookies()

  return !!cookies.get('token')?.value
}

export async function auth() {
  const cookies = await nextCookies()
  const token = cookies.get('token')?.value

  if (!token) {
    redirect('/auth/sign-in')
  }

  try {
    const { user } = await getProfile()

    return { user }
  } catch {}

  redirect('api/auth/sign-out')
}
