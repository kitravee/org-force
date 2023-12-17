import {
  WebEnv,
  webEnv,
} from './../../apps/reaction/app/environments/environment'

import { plainToInstance, Type } from 'class-transformer'

import { IsNotEmpty, validateSync } from 'class-validator'

import { IsBoolean, IsString, ValidateNested } from 'class-validator'
import 'reflect-metadata'

export class WebEnvValidation implements WebEnv {
  @IsBoolean()
  public isProd: boolean

  @ValidateNested()
  @Type(() => WebEnvApiVo)
  public api: WebEnvApiVo
}

class WebEnvApiVo {
  @IsNotEmpty()
  @IsString()
  public gqlUrl: string
}

const apiEnvValidationInstance = plainToInstance(WebEnvValidation, webEnv)
const errors = validateSync(apiEnvValidationInstance)

if (errors.length) {
  console.error(errors)
  process.exit(1)
}
