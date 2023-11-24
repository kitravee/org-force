'use client'

import './global.css'

import { NextUrqlProvider } from '@org-force/web/urql'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextUrqlProvider>{children}</NextUrqlProvider>
      </body>
    </html>
  )
}
