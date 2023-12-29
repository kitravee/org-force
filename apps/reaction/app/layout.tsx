// 'use client'
import { ThemeProvider } from '@org-force/ui'
import { NextUrqlProvider } from '@org-force/web/urql'

import { ComponentTest } from '../components/component-test'
import { webEnv } from '../environments'
import { auth } from '../libs/next-auth/auth-option'
import { NextAuthSessionProvider } from '../libs/next-auth/next-auth-session-provider'
import './global.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  console.log(session)
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthSessionProvider session={session}>
            <NextUrqlProvider url={webEnv.api.gqlUrl}>
              {children}
              <ComponentTest />
            </NextUrqlProvider>
          </NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
