'use client'

import './global.css'

import { ThemeProvider } from '@org-force/ui'
import { NextUrqlProvider } from '@org-force/web/urql'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextUrqlProvider>{children}</NextUrqlProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
