// 'use client'
import { ThemeProvider } from '@org-force/ui'

import { ComponentTest } from '../components/component-test'
import { auth } from '../libs/next-auth/auth-option'
import { NextAuthSessionProvider } from '../libs/next-auth/next-auth-session-provider'

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
            {children}
            <ComponentTest />
          </NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
