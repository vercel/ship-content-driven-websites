import type { HomePagePayload } from '@/types'

import Page from '../pages/page/Page'

export interface HomePageProps {
  data: HomePagePayload | null
}

export function HomePage(props: HomePageProps) {
  return Page(props)
}

export default HomePage
