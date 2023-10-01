import { Injectable } from '@nestjs/common';
import { PrismaService } from '@org-force/api/data-access-db';
import {
  CreateOneUserArgs,
  DeleteOneUserArgs,
  FindUniqueUserArgs,
  UpdateOneUserArgs,
} from '@org-force/api/generated-db-types';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOneUserArgs: CreateOneUserArgs) {
    return this.prisma.user.create(createOneUserArgs);
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(findUniqueUserArgs: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(findUniqueUserArgs);
  }

  update(updateOneUserArgs: UpdateOneUserArgs) {
    return this.prisma.user.update(updateOneUserArgs);
  }

  remove(deleteOneUserArgs: DeleteOneUserArgs) {
    return this.prisma.user.delete(deleteOneUserArgs);
  }
}
