import Link from 'next/link'

import { CommandMenu } from '@/components/command-menu'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { cn } from '@/lib/utils'
import { loadSettings } from '@/sanity/loader/loadQuery'

import DeployButton from './deploy-button'
import { buttonVariants } from './ui/button'

export async function SiteHeader() {
  const initial = await loadSettings()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav data={initial.data} />
        <MobileNav data={initial.data} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu data={initial.data} />
          </div>
          <nav className="flex items-center">
            <DeployButton />
            {initial?.data?.github && (
              <Link
                prefetch
                href={initial.data.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                    }),
                    'w-9 px-0',
                  )}
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            )}
            {initial?.data?.twitter && (
              <Link
                href={initial.data.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                    }),
                    'w-9 px-0',
                  )}
                >
                  <Icons.twitter className="h-3 w-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
            )}

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
