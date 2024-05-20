import { defineType } from 'sanity'

export default defineType({
  name: 'customComponents',
  title: 'Custom Components',
  type: 'array',
  of: [
    {
      type: 'hero',
    },
    {
      type: 'spotlightHeader',
    },
    {
      type: 'gridHighlight',
    },
  ],
})
