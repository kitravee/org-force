'use client'
import { SessionProvider, SessionProviderProps } from 'next-auth/react'
import { FC, ReactNode } from 'react'

type Props = SessionProviderProps & {
  children: ReactNode
}

export const NextAuthSessionProvider: FC<Props> = ({ children, ...rest }) => {
  return <SessionProvider {...rest}>{children}</SessionProvider>
}
