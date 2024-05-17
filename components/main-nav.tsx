import Link from 'next/link'
import * as React from 'react'

import { Icons } from '@/components/icons'
import { SettingsQueryResult } from '@/sanity.types'

export function MainNav({ data }: { data: SettingsQueryResult }) {
  return (
    <div className="mr-4 hidden md:flex">
      <Link prefetch href="/" className="mr-6 flex items-center space-x-2">
        {data?.name ? (
          <span className="hidden font-bold sm:inline-block">{data?.name}</span>
        ) : (
          <Icons.logo className="w-[124px]" />
        )}
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {data?.menuItems?.map((item) => (
          <Link
            prefetch
            key={item.slug}
            href={item.slug || '#'}
            className="transition-colors hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
