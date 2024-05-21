import { defineField, defineType } from 'sanity'

export const gridHighlight = defineType({
  name: 'gridHighlight',
  type: 'object',
  title: 'Grid Highlight',
  fields: [
    defineField({
      name: 'cards',
      type: 'array',
      title: 'Cards',
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
              name: 'description',
              type: 'string',
              title: 'Description',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bullets',
              type: 'array',
              title: 'Bullets',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      type: 'string',
                      title: 'Text',
                      validation: (Rule) => Rule.required().max(62),
                    },
                  ],
                },
              ],

              validation: (Rule) => Rule.required().min(3).max(4),
            }),
            defineField({
              name: 'cta',
              type: 'object',
              title: 'Call to Action',
              fields: [
                defineField({
                  name: 'label',
                  type: 'string',
                  title: 'Label',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'link',
                  type: 'string',
                  title: 'Link',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      cards: 'cards',
    },
    prepare({ cards }) {
      return {
        title: `[Grid Highlight] - ${cards[0].title}`,
      }
    },
  },
})
