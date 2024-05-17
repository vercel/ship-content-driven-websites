'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { PreviewDataSheet } from '@/components/preview-data-sheet'
import { HomePageQueryResult } from '@/sanity.types'
import { homePageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

import HomePage from './HomePage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<HomePageQueryResult>
}

export default function HomePagePreview(props: Props) {
  const { params, initial } = props
  const { data } = useQuery<HomePageQueryResult>(homePageQuery, params, {
    initial,
  })

  return (
    <>
      <HomePage data={data!} />
      <PreviewDataSheet data={data} />
    </>
  )
}
