import { devtoolsExchange } from '@urql/devtools'
import {
  UrqlProvider,
  ssrExchange,
  cacheExchange,
  fetchExchange,
  createClient,
} from '@urql/next'
import { useMemo } from 'react'
import { z } from 'zod'

type Props = {
  children: React.ReactNode
}

const envSchema = z.string().min(1)

export const NextUrqlProvider: React.FC<Props> = ({ children }) => {
  const [client, ssr] = useMemo(() => {
    const ssrData = ssrExchange()
    const clientData = createClient({
      url: envSchema.parse(process.env.NEXT_PUBLIC_GRAPHQL_URL),
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
