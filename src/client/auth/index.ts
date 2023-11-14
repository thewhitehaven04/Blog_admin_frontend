import { type IAuthResponseDto, type IAuthRequestDto } from 'Client/auth/types'
import BaseApiClient from 'Client/base'
import { type TGenericResponse } from 'Client/base/types'

export default class AuthClient extends BaseApiClient {
  async auth(
    loginData: IAuthRequestDto
  ): Promise<TGenericResponse<IAuthResponseDto>> {
    return await (
      await this.request('POST', 'login/authenticate', {}, loginData)
    ).json()
  }
}