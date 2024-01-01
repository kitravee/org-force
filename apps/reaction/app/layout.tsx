// 'use client'
import { ThemeProvider } from '@org-force/ui'
import { NextUrqlProvider } from '@org-force/web/urql'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
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
              <div className="bg-background relative flex min-h-screen flex-col">
                {children}
              </div>

              <ComponentTest />
            </NextUrqlProvider>
          </NextAuthSessionProvider>
        </ThemeProvider>
        <div>test</div>
      </body>
    </html>
  )
}
