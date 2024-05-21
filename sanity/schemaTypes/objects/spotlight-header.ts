import { defineField, defineType } from 'sanity'

export const spotlightHeader = defineType({
  name: 'spotlightHeader',
  type: 'object',
  title: 'Spotlight Header',
  fields: [
    defineField({
      name: 'spotlight',
      title: 'Spotlight',
      type: 'string',
      validation: (rule) => rule.required(),
      description:
        'This is the text that will be displayed in the spotlight header. It should be one word.',
    }),
    defineField({
      name: 'title',
      title: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'fill',
      title: 'Spotlight Fill',
      type: 'text',
      validation: (rule) =>
        rule.required().custom((value: string) => {
          if (!/^#[0-9A-F]{6}$/i.test(value)) {
            return 'Please enter a valid hex value'
          }
          return true
        }),
    }),
  ],
})
