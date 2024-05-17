import { HomePageQueryResult } from '@/sanity.types'

import Page from '../pages/page/Page'

export interface HomePageProps {
  data: HomePageQueryResult
}

export function HomePage(props: HomePageProps) {
  return Page(props)
}

export default HomePage
