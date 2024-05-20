# Build a stunning, content-driven website<!-- omit in toc -->

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

This template uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content. It comes with a native Sanity Studio that offers features like real-time collaboration and visual editing with live updates using [Presentation][presentation].

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. You can use this starter to kick-start a content-driven website or learn more about these technologies.

## Features

- A performant, content-driven website with editable pages
- A native and customizable authoring environment
- Real-time and collaborative content editing with fine-grained revision history
- Side-by-side instant content preview that works across your whole site
- Support for block content and the most advanced custom fields capability in the industry
- Webhook-triggered Incremental Static Revalidation; no need to wait for a rebuild to publish new content
- Free Sanity project with unlimited admin users, free content updates, and pay-as-you-go for API overages
- A project with starter-friendly and not too heavy-handed TypeScript and Tailwind.css

## Table of Contents

- [Features](#features)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
  - [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Step 1. Set up the environment](#step-1-set-up-the-environment)
  - [Step 2. Set up the project locally](#step-2-set-up-the-project-locally)
  - [Step 3. Run Next.js locally in development mode](#step-3-run-nextjs-locally-in-development-mode)
  - [Step 4. Deploy to production](#step-4-deploy-to-production)
- [Portable Text](#portable-text)
  - [Using the Custom Portable Text Component](#using-the-custom-portable-text-component)
- [Adding Custom Components](#adding-custom-components)

## Project Overview

### Important files and folders

| File(s)                                                    | Description                                             |
| ---------------------------------------------------------- | ------------------------------------------------------- |
| `sanity.config.ts`                                         | Config file for Sanity Studio                           |
| `sanity.cli.ts`                                            | Config file for Sanity CLI                              |
| `/app/studio/[[...tool]]/Studio.tsx`                       | Where Sanity Studio is mounted                          |
| `/app/api/revalidate/route.ts`                             | Serverless route for triggering ISR                     |
| `/app/api/draft/route.ts`                                  | Serverless route for triggering Draft mode              |
| `/sanity/schemaTypes`                                      | Where Sanity Studio gets its content types from         |
| `/sanity/plugins`                                          | Where the advanced Sanity Studio customization is setup |
| `/sanity/loader/loadQuery.ts`,`/sanity/loader/useQuery.ts` | Configuration for the Sanity Content Lake client        |
| `/components/custom-portable-text.tsx`                     | Component for rendering your custom React components    |

## Configuration

### Step 1. Set up the environment

Use the Deploy Button below. It will let you deploy the starter using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-sanity-example) as well as connect it to your Sanity Content Lake using [the Sanity Vercel Integration][integration].

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

### Step 2. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your content-driven website should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```

## Portable Text

We believe you should treat all your content as structured content, even your rich text and block content. Portable Text is a presentation-agnostic specification for block content that you can use with Sanity. It's designed to be efficient for real-time collaborative interfaces and makes it possible to annotate rich text with additional data structures recursively.

When you query your Sanity project’s API your rich text content is returned as Portable Text. If you are accustomed to traditional or other headless CMSes you are probably used to dealing with HTML or Markdown out of the box. Portable Text is designed to be used in pretty much any format or markup where you want to render rich text content.

You render Portable Text by serializing the arrays that contain your content into the format you need it. There is tooling for generic markup and programming languages and for popular frameworks, that makes it easier to serialize Portable Text and lets you decide how custom content types should be handled.

[Learn More about Portable Text.](https://www.sanity.io/docs/block-content)

### Using the Custom Portable Text Component

In the `/components/custom-portable-text.tsx` file of our project you will see a `types` object. This is an object of React components that renders different types of objects that might appear both as part of the input array, or as inline objects within text blocks - eg alongside text spans.

[Learn More about types.](https://github.com/portabletext/react-portabletext?tab=readme-ov-file#portabletextreact)

## Adding Custom Components

Step 1. Use [v0.dev][v0.dev] to help design a component

Step 2. Create a schema for your new component in the `sanity/schemas/objects` folder

Step 3. Add the schema to the `sanity/schemas/objects/custom-components.ts` file

Step 4. Create a new component in the `/components/sanity` folder

Step 5. Automatically create types for your new schema

```bash
npm run typegen
```

Step 6. Update the `<CustomPortableText />` component in `components/custom-portable-text.tsx` to include your new component

Step 7. Go to the `/studio` route in your project to create and publish your content

[v0.dev]: https://v0.dev
[vercel-deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fship-content-driven-websites&project-name=my-content-driven-website&repository-name=my-content-driven-website&demo-title=Ship+Content+Driven+Websites&demo-description=A+content-driven+website+with+built-in+content+editing+and+instant+previews.+Uses+App+Router.&demo-url=https%3A%2F%2Fship-content-driven-websites.vercel.app&demo-image=https%3A%2F%2Fship-content-driven-websites.vercel.app%2Fapi%2Fog&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx&external-id=nextjs%3Btemplate%3Dship-content-driven-websites&env=SANITY_REVALIDATE_SECRET&envDescription=A+random+string+value+used+to+validate+revalidation+requests+from+the+Sanity+Webhook>
[integration]: https://www.sanity.io/docs/vercel-integration?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[`.env.local.example`]: .env.local.example
[nextjs]: https://github.com/vercel/next.js
[sanity-create]: https://www.sanity.io/get-started/create-project?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-deployment]: https://www.sanity.io/docs/deployment?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-homepage]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-community]: https://slack.sanity.io/
[sanity-schema-types]: https://www.sanity.io/docs/schema-types?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-github]: https://github.com/sanity-io/sanity/discussions
[sanity-groq]: https://www.sanity.io/docs/groq?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-content-modelling]: https://www.sanity.io/docs/content-modelling?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-webhooks]: https://www.sanity.io/docs/webhooks?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[vercel]: https://vercel.com
[vercel-github]: https://github.com/vercel/next.js/discussions
[personal-website-pages]: https://github.com/sanity-io/template-nextjs-personal-website
[presentation]: https://www.sanity.io/docs/presentation
