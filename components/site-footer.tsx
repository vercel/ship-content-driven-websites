import { loadSettings } from '@/sanity/loader/loadQuery'

export async function SiteFooter() {
  const initial = await loadSettings()

  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{' '}
          <a
            href={'https://vercel.com'}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Vercel
          </a>
          {initial?.data?.github && (
            <>
              <span>. The source code is available on </span>
              <a
                href={initial.data.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>{' '}
            </>
          )}
          .
        </p>
      </div>
    </footer>
  )
}
