import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    body[]{
      ...,
      // this is the shorthand for the select() function in GROQ: https://www.sanity.io/docs/groq-functions#298e89c3c8d9
      _type == "personList" => {
        persons[]->{
          firstName,
          lastName,
          _id,
          image,
          username
        }
      }
    },
    title,
    metadataBase,
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body[]{
      ...,
      // this is the shorthand for the select() function in GROQ: https://www.sanity.io/docs/groq-functions#298e89c3c8d9
      _type == "personList" => {
        persons[]->{
          firstName,
          lastName,
          _id,
          image,
          username
        }
      }
    },
    description,
    title,
    "slug": slug.current,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    github,
    twitter,
    name,
  }
`
