import { type IAuthRequestDto } from 'Client/auth/types'
import BaseApiClient from 'Client/base'

export default class AuthClient extends BaseApiClient {
  async auth(
    loginData: IAuthRequestDto
  ): Promise<Response> {
    return await this.request(
      'POST',
      'login/authenticate',
      {},
      loginData
    )
  }
}
