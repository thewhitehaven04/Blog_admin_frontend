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
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      ...args
    })
  }
}
