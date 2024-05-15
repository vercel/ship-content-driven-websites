import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import HomePage from '@/components/home-page/HomePage'
import { loadHomePage } from '@/sanity/loader/loadQuery'
const HomePagePreview = dynamic(
  () => import('@/components/home-page/HomePagePreview'),
)

export default async function IndexRoute() {
  const initial = await loadHomePage()

  if (draftMode().isEnabled) {
    return (
      <HomePagePreview
        initial={initial}
        params={{
          slug: '/',
        }}
      />
    )
  }

  return <HomePage data={initial.data} />
}
