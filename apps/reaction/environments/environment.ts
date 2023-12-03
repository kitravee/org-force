// eslint-disable-next-line unicorn/prefer-node-protocol
import * as process from 'process'

export const webEnv: WebEnv = {
  isProd: process.env.ENVIRONMENT === 'production',
  api: {
    gqlUrl: process.env.NEXT_PUBLIC_GRAPHQL_URL as string,
  },
}

export interface WebEnv {
  isProd: boolean
  api: {
    gqlUrl: string
  }
}
