import * as process from 'node:process'

export const apiEnv: ApiEnv = {
  isProd: process.env.ENVIRONMENT === 'production',
  api: {
    port: Number(process.env.FRICTION_PORT),
  },
  db: {
    url: process.env.DATABASE_URL,
  },
}

export interface ApiEnv {
  isProd: boolean
  api: {
    port: number
  }
  db: {
    url: string
  }
}
