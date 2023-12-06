import { type IAuthResponseDto, type IAuthRequestDto } from 'Client/auth/types'
import BaseApiClient from 'Client/base'
import { type IGenericError } from 'Client/base/types'

export default class AuthClient extends BaseApiClient {
  async auth(
    loginData: IAuthRequestDto
  ): Promise<[IGenericError[], null] | [null, IAuthResponseDto]> {
    return await this.request<IAuthResponseDto, IGenericError[]>(
      'POST',
      'login/authenticate',
      {},
      loginData
    )
  }
}
