import { PortableText, type PortableTextComponents } from 'next-sanity'

import { GridHighlight } from '@/components/sanity/grid-highlight'
import { Hero } from '@/components/sanity/hero'
import { Spotlight } from '@/components/sanity/spotlight'
import { CustomComponents } from '@/sanity.types'

export function CustomPortableText({
  value,
}: {
  paragraphClasses?: string
  value: CustomComponents
}) {
  const components: PortableTextComponents = {
    types: {
      hero: ({ value }) => {
        return <Hero {...value} />
      },
      spotlightHeader: ({ value }) => {
        return <Spotlight {...value} />
      },
      gridHighlight: ({ value }) => {
        return <GridHighlight {...value} />
      },
    },
  }

  return <PortableText components={components} value={value} />
}
