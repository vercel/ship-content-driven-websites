import './globals.css'

import { GeistSans } from 'geist/font/sans'

import { cn } from '@/lib/utils'
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body className={cn('min-h-screen antialiased ', GeistSans.className)}>
        {children}
      </body>
    </html>
  )
}
