import helmet from '@fastify/helmet'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'

import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  )

  // TODO: contentSecurityPolicy should turn on in production
  await app.register(helmet, { contentSecurityPolicy: false })
  app.enableCors()

  const port = process.env.PORT || 3333
  await app.listen(port)
  Logger.log(
    `🚀 Application playground is running on: http://localhost:${port}/graphiql`,
  )
}

bootstrap()
