import helmet from '@fastify/helmet'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'

import { AppModule } from './app/app.module'
import { apiEnv } from './environments/environment'

const { isProd, api } = apiEnv

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )

  // TODO: contentSecurityPolicy should turn on in production
  await app.register(helmet, { contentSecurityPolicy: isProd })
  app.enableCors()

  await app.listen(api.port)

  Logger.log(
    `🚀 Application playground is running on: http://localhost:${api.port}/graphiql`,
  )
}

const runBootstrap = async () => {
  try {
    const text = await bootstrap()
    console.log(text)
  } catch {
    // Deal with the fact the chain failed
  }
}

runBootstrap()
