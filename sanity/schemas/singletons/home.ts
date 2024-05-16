import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metadataBase',
      title: 'Metadata Base',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'This is the title of your website.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'This is the description of your website.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'These are the keywords for your website.',
        }),
        defineField({
          name: 'author',
          title: 'Author',
          type: 'string',
          description: 'This is the author of your website.',
        }),
        defineField({
          name: 'publisher',
          title: 'Publisher',
          type: 'string',
          description: 'This is the publisher of your website',
        }),
        defineField({
          name: 'opengraph',
          title: 'Open Graph',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'This is the open graph image for your website.',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'This is the open graph title for your website.',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
              description:
                'This is the open graph description for your website.',
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              description: 'This is the open graph type for your website.',
            }),
            defineField({
              name: 'siteName',
              title: 'Site Name',
              type: 'string',
              description: 'This is the open graph site name for your website.',
            }),
          ],
        }),
      ],
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
      readOnly: true,
      description: 'This is the home page, the slug is not editable',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'customComponents',
      name: 'body',
      title: 'Body',
      description: "This is where you can create the page's content.",
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
