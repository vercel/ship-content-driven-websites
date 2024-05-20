import { DocumentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
export const page = defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: DocumentIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Page title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Page slug',
      description:
        'The URL path for this page. It should not have a leading slash.',
      options: {
        source: 'title',
      },
      validation: (rule) =>
        rule.required().custom((slug) => {
          const slugValue = slug?.current ?? ''
          if (slugValue === '/') {
            return 'The slug cannot be the root path.'
          } else if (/^\//.test(slugValue)) {
            return 'The slug cannot start with a slash.'
          }
          return true
        }),
    }),
    defineField({
      name: 'description',
      description: 'Used for the <meta> description tag for SEO.',
      title: 'Page description',
      type: 'text',
      validation: (rule) => [
        rule.required().error('Please provide a description for the page. '),
        rule.max(155).warning('Meta descriptions should be between 50 and 155 characters or else they can get truncated in search results.'),
      ],
    }),
    defineField({
      type: 'customComponents',
      name: 'body',
      title: 'Page body',
      description: "This is where you can create the page's content.",
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current'
    },
    prepare({ title, slug }) {
      return {
        subtitle: slug ? `/${slug}` : 'No slug set',
        title,
      }
    },
  },
})
