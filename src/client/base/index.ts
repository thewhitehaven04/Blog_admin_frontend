import { getAccessToken } from 'Service/accessToken'

export default class BaseApiClient {
  rootUrl: string

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl
  }

  async request(
    method: string,
    endpoint: string,
    queryParams?: Record<string, any>,
    data?: any,
    args?: RequestInit
  ): Promise<Response> {
    const params = new URLSearchParams(queryParams).toString()
    return await fetch(`${this.rootUrl}/${endpoint}?${params}`, {
      ...args,
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        ...args?.headers
      },
      body: JSON.stringify(data),
    })
  }

  async authorizedRequest(
    method: string,
    endpoint: string,
    queryParams?: Record<string, any>,
    data?: any,
    args?: RequestInit
  ): Promise<Response> {
    const accessToken = getAccessToken()
    if (accessToken != null) {
      return await this.request(method, endpoint, queryParams, data, {
        ...args,
        headers: { Authorization: `Bearer ${accessToken}` }
      })
    }
    throw new Error('No token stored in storage')
  }
}
