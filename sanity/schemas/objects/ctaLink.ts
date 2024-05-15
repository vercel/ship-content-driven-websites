import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ctaLink',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
