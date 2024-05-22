import { PortableText, type PortableTextComponents } from 'next-sanity'

import { GridHighlight } from '@/components/sanity/grid-highlight'
import { Hero } from '@/components/sanity/hero'
import { Spotlight } from '@/components/sanity/spotlight'
import { CustomComponents } from '@/sanity.types'

import PersonList from './sanity/person-list'

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
      personList: ({ value }) => {
        return <PersonList {...value} />
      },
    },
  }

  if (!value) return null

  return <PortableText components={components} value={value} />
}
