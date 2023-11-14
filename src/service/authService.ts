import appConfig from '@/appConfig'
import AuthClient from 'Client/auth'
import { type IAuthRequestDto } from 'Client/auth/types'
import { storeAccessToken } from 'Service/accessToken'
import { type Payload, jwtDecode } from 'jwt-decode'

export const AuthService = {
  client: new AuthClient(appConfig.apiRootUrl),

  async authenticate(
    userData: IAuthRequestDto
  ): Promise<[null, Payload] | [string, null]> {
    const response = await this.client.auth(userData)

    if (response.success) {
      storeAccessToken(response.data.token)
      const payload = jwtDecode<Payload>(response.data.token) 
      return [null, payload]
    }

    return [response.errors[0].message, null]
  }
}
