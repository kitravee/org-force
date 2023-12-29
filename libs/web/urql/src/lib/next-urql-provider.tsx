'use client'
import { devtoolsExchange } from '@urql/devtools'
import {
  UrqlProvider,
  ssrExchange,
  cacheExchange,
  fetchExchange,
  createClient,
} from '@urql/next'
import { useMemo } from 'react'

type Props = {
  children: React.ReactNode
  url: string
}

export const NextUrqlProvider: React.FC<Props> = ({ children, url }) => {
  const [client, ssr] = useMemo(() => {
    const ssrData = ssrExchange()
    const clientData = createClient({
      url: url,
      exchanges: [cacheExchange, ssrData, fetchExchange, devtoolsExchange],
      suspense: true,
    })

    return [clientData, ssrData]
  }, [])

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  )
}
