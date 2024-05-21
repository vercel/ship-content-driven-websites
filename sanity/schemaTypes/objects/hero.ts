import { defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'header',
      type: 'object',
      title: 'Header',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          type: 'string',
          title: 'Description',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'string',
              title: 'Link',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'thumbnail',
              type: 'image',
              title: 'Thumbnail',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value && value.length % 3 !== 0) {
            return 'Products must come in sets of 3.'
          }
          if (value && value.length !== 9) {
            return 'You must have 9 products.'
          }

          return true
        }).required(),
    }),
  ],
  preview: {
    select: {
      header: 'header',
      products: 'products',
    },
    prepare({ header, products }) {
      return {
        title: `[Hero] - ${header?.title}`,
        subtitle: header?.description,
        media: products?.[0]?.thumbnail,
      }
    },
  },
})
