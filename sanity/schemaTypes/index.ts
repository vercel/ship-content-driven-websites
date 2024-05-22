import { page } from './documents/page'
import { person } from './documents/person'
import { ctaLink } from './objects/ctaLink'
import { customComponents } from './objects/custom-components'
import { duration } from './objects/duration'
import { gridHighlight } from './objects/grid-highlight'
import { hero } from './objects/hero'
import { metadata } from './objects/metadata'
import { personList } from './objects/person-list'
import { spotlightHeader } from './objects/spotlight-header'
import { home } from './singletons/home'
import { settings } from './singletons/settings'

export const schemaTypes = [
  page,
  duration,
  ctaLink,
  customComponents,
  gridHighlight,
  hero,
  metadata,
  spotlightHeader,
  home,
  settings,
  person,
  personList,
]
