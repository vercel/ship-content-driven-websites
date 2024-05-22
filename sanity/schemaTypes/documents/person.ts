import { defineField, defineType } from 'sanity'

export const person = defineType({
  name: 'person',
  type: 'document',
  title: 'Person',
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      title: 'First Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Profile Image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'username',
      type: 'object',
      title: 'username',
      fields: [
        defineField({
          name: 'link',
          type: 'string',
          title: 'Link',
          validation: (Rule) => Rule.required().regex(/https:\/\/.*/),
        }),
        defineField({
          name: 'text',
          type: 'string',
          title: 'Text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
