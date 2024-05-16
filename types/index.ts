import { Metadata } from 'next'
import type { PortableTextBlock } from 'next-sanity'

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
  github?: string
  twitter?: string
  name: string
}
