import { defineType } from 'sanity'

export default defineType({
  name: 'customComponents',
  title: 'Custom Components',
  type: 'array',
  of: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'spotlightHeader',
      title: 'Spotlight Header',
      type: 'spotlightHeader',
    },
    {
      name: 'gridHighlight',
      title: 'Grid Highlight',
      type: 'gridHighlight',
    },
  ],
})
