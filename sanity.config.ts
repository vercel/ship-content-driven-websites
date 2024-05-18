'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import {
  defineDocuments,
  defineLocations,
  presentationTool,
} from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import { resolveHref } from '@/sanity/lib/utils'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'

import { schemaTypes } from './sanity/schemaTypes'
import { home } from './sanity/schemaTypes/singletons/home'
import { settings } from './sanity/schemaTypes/singletons/settings'


const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Ship Content Driven Websites'


export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: pageStructure([home, settings]),
    }),
    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/:slug',
            filter: `_type == "page" && slug.current == $slug`,
          },
        ]),
        locations: {
          settings: defineLocations({
            message: 'This document is used on all pages',
            tone: 'caution',
          }),
          home: defineLocations({
            message: 'This document is used to render the front page',
            tone: 'positive',
            locations: [{ title: 'Home', href: resolveHref('home')! }],
          }),
          page: defineLocations({
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: resolveHref('page', doc?.slug)!,
                },
              ],
            }),
          }),
        },
      },
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
