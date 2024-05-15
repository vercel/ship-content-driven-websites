import { Metadata } from 'next'
import { Url } from 'next/dist/shared/lib/router/router'
import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface HomePagePayload extends PagePayload {
  metadataBase: Metadata
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  description?: string
  title?: string
  slug?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  github?: Url
  twitter?: Url
  ogImage?: Image
  name: string
}
