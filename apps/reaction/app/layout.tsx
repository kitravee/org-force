'use client'
import { ThemeProvider } from '@org-force/ui'
import { NextUrqlProvider } from '@org-force/web/urql'

import { webEnv } from '../environments/environment'

import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NextUrqlProvider url={webEnv.api.gqlUrl}>
            {children}
          </NextUrqlProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
