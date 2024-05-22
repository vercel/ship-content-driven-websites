import { defineField, defineType } from 'sanity'

export const personList = defineType({
  name: 'personList',
  type: 'object',
  title: 'Person List',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'persons',
      type: 'array',
      title: 'Persons',
      of: [
        {
          type: 'reference',
          to: [{ type: 'person' }],
        },
      ],
      validation: (Rule) => Rule.min(1).max(9).required(),
    }),
  ],
})
