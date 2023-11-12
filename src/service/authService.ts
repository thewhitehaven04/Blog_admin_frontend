import appConfig from '@/appConfig';
import AuthClient from 'Client/auth';
import { type IAuthRequestDto } from 'Client/auth/types';
import { storeAccessToken } from 'Serivce/accessToken';
import { jwtDecode, type Payload } from 'jwt-decode';

export const AuthService = {
  client: new AuthClient(appConfig.apiRootUrl),
  
  async authenticate(userData: IAuthRequestDto): Promise<Payload> {
    const response = await this.client.auth(userData)
    
    if (response.success && (response.data != null)) {
      storeAccessToken(response.data?.token) 
      return await jwtDecode(response.data.token)
    }
    // figure out a good way to propagate errors, maybe displaying 
    // sanitized output in a component? prob should look into Error boundaries
    // else { }
    throw new Error('Authentication failure')
  }
}