'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { PreviewDataSheet } from '@/components/preview-data-sheet'
import { PagesBySlugQueryResult } from '@/sanity.types'
import { pagesBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

import Page from './Page'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<PagesBySlugQueryResult>
}

export default function PagePreview(props: Props) {
  const { params, initial } = props
  const { data } = useQuery<PagesBySlugQueryResult>(pagesBySlugQuery, params, {
    initial,
  })

  return (
    <>
      <Page data={data!} />
      <PreviewDataSheet data={data} />
    </>
  )
}
