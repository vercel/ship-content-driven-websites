import { defineType } from 'sanity'

export const metadata = defineType({
  name: 'metadata-page',
  type: 'object',
  title: 'Page Metadata',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'applicationName',
      title: 'Application Name',
      type: 'string',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'generator',
      title: 'Generator',
      type: 'string',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'referrer',
      title: 'Referrer',
      type: 'string',
      options: {
        list: [
          'no-referrer',
          'no-referrer-when-downgrade',
          'origin',
          'origin-when-cross-origin',
          'same-origin',
          'strict-origin',
          'strict-origin-when-cross-origin',
        ],
      },
    },
    {
      name: 'themeColor',
      title: 'Theme Color',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'string',
      options: {
        list: [
          'normal',
          'light',
          'dark',
          'light dark',
          'dark light',
          'only light',
        ],
      },
    },
    {
      name: 'viewport',
      title: 'Viewport',
      type: 'object',
      fields: [
        {
          name: 'width',
          title: 'Width',
          type: 'number',
        },
        {
          name: 'height',
          title: 'Height',
          type: 'number',
        },
        {
          name: 'initialScale',
          title: 'Initial Scale',
          type: 'number',
        },
        {
          name: 'minimumScale',
          title: 'Minimum Scale',
          type: 'number',
        },
        {
          name: 'maximumScale',
          title: 'Maximum Scale',
          type: 'number',
        },
        {
          name: 'userScalable',
          title: 'User Scalable',
          type: 'boolean',
        },
        {
          name: 'viewportFit',
          title: 'Viewport Fit',
          type: 'string',
          options: {
            list: ['auto', 'cover', 'contain'],
          },
        },
        {
          name: 'interactiveWidget',
          title: 'Interactive Widget',
          type: 'string',
          options: {
            list: ['resizes-visual', 'resizes-content', 'overlays-content'],
          },
        },
      ],
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'string',
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
    },
    {
      name: 'robots',
      title: 'Robots',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'alternates',
      title: 'Alternates',
      type: 'object',
      fields: [
        {
          name: 'canonical',
          title: 'Canonical',
          type: 'string',
        },
        {
          name: 'languages',
          title: 'Languages',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'media',
          title: 'Media',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'type',
          title: 'Type',
          type: 'string',
        },
      ],
    },
    {
      name: 'icons',
      title: 'Icons',
      type: 'image',
    },
  ],
})
