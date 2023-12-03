'use client'
import { NextUrqlProvider } from '@org-force/web/urql'

import './global.css'
import { webEnv } from '../environments/environment'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextUrqlProvider url={webEnv.api.gqlUrl}>{children}</NextUrqlProvider>
      </body>
    </html>
  )
}
