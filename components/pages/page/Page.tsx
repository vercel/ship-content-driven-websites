import { CustomPortableText } from '@/components/custom-portable-text'
import {
  CustomComponents,
  HomePageQueryResult,
  PagesBySlugQueryResult,
} from '@/sanity.types'

export interface PageProps {
  data: PagesBySlugQueryResult | HomePageQueryResult
}

export function Page({ data }: PageProps) {
  const { body } = data ?? {}

  return (
    <>
      {body && (
        <CustomPortableText
          paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
          value={body as CustomComponents}
        />
      )}
    </>
  )
}

export default Page
