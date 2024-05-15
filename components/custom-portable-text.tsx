import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from 'next-sanity'

import { GridHighlight } from '@/components/structured-design-primitives/grid-highlight'
import { Hero } from '@/components/structured-design-primitives/hero'
import { Spotlight } from '@/components/structured-design-primitives/spotlight'

export function CustomPortableText({
  value,
}: {
  paragraphClasses?: string
  value: PortableTextBlock[]
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
