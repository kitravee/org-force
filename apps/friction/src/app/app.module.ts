import {Module, ValidationPipe} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {MercuriusDriver, MercuriusDriverConfig} from "@nestjs/mercurius";
import * as path from "path";
import {APP_PIPE} from "@nestjs/core";
import { UserModule } from '@org-force/api/feature-user';

const validationProvider = {
  provide: APP_PIPE,
  useValue: new ValidationPipe(),
};

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: path.join(__dirname, './autogenerated-schema.gql')
    }),
    UserModule
  ],
  providers: [validationProvider],
})
export class AppModule {}
