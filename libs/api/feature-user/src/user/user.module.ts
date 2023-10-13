import { Module } from '@nestjs/common'
import { PrismaModule } from '@org-force/api/data-access-db'

import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
  providers: [UserResolver, UserService],
  imports: [PrismaModule],
})
export class UserModule {}
