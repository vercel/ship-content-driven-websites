'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { PreviewDataSheet } from '@/components/preview-data-sheet'
import { homePageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { HomePagePayload } from '@/types'

import HomePage from './HomePage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<HomePagePayload | null>
}

export default function HomePagePreview(props: Props) {
  const { params, initial } = props
  const { data } = useQuery<HomePagePayload | null>(homePageQuery, params, {
    initial,
  })

  console.log(data)

  return (
    <>
      <HomePage data={data!} />
      <PreviewDataSheet data={data} />
    </>
  )
}
