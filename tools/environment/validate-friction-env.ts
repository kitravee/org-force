import {
  apiEnv,
  ApiEnv,
} from '../../apps/friction/src/environments/environment'
import { plainToInstance, Type } from 'class-transformer'
import {
  IsNotEmpty,
  validateSync,
  IsBoolean,
  IsDefined,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator'

import 'reflect-metadata'

export class ApiEnvValidation implements ApiEnv {
  @IsBoolean()
  public isProd: boolean

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvDbVo)
  db: ApiEnvDbVo

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvApiVo)
  api: ApiEnvApiVo
}

class ApiEnvDbVo {
  @IsNotEmpty()
  @IsString()
  url: string
}

class ApiEnvApiVo {
  @IsNumber()
  port: number
}

const apiEnvValidationInstance = plainToInstance(ApiEnvValidation, apiEnv)
const errors = validateSync(apiEnvValidationInstance)

if (errors.length) {
  console.error(errors)
  process.exit(1)
}
