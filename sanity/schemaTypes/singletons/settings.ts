import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'page',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'name',
      description:
        'The name of your site that is shown in the navigation. If not defined it will show the default logo',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'github',
      description: 'A link to this site’s GitHub repository.',
      title: 'Github Repo',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      description: 'A link to your twitter account.',
      title: 'Twitter',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
