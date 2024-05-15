import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { client } from '@/sanity/lib/client'
import { token } from '@/sanity/lib/token'

const clientWithToken = client.withConfig({ token })

export async function GET(request: Request) {
  let redirectTo = '/'

  try {
    const { isValid, redirectTo: maybeRedirectTo } = await validatePreviewUrl(
      clientWithToken,
      request.url,
    )
    if (maybeRedirectTo) {
      redirectTo = maybeRedirectTo
    }

    if (!isValid) {
      return new Response('Invalid secret', { status: 401 })
    }

    draftMode().enable()
  } catch (error) {
    console.error(error)
    return new Response('Error', { status: 500 })
  }

  redirect(redirectTo)
}
