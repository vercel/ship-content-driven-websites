'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { SettingsPayload } from '@/types'

export function MainNav({ data }: { data: SettingsPayload }) {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link prefetch href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{data.name}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {data?.menuItems?.map((item) => (
          <Link
            key={item.slug}
            href={item.slug || '#'}
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname.toUpperCase() === item.slug?.toUpperCase()
                ? 'text-foreground'
                : 'text-foreground/60',
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
