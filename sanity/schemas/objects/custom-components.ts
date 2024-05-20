import { defineType } from 'sanity'

/** 
This type is referenced in the page schema. The array is used to define which components 
can be added to the body of the page. Using this custom type allows us to add our custom components
to one schema and have them be referenced by multiple schemas.
*/

export default defineType({
  name: 'customComponents',
  title: 'Custom Components',
  type: 'array',
  of: [
    {
      type: 'hero',
    },
    {
      type: 'spotlightHeader',
    },
    {
      type: 'gridHighlight',
    },
  ],
})
