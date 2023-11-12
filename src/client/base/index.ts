export default class BaseApiClient {
  rootUrl: string

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl
  }

  // async sendFormData(
  //   endpoint: string,
  //   method: 'POST' | 'GET',
  //   data: FormData,
  //   args?: RequestInit
  // ): Promise<Response> {
  //   return await fetch(`${this.rootUrl}/${endpoint}`, {
  //     method,
  //     body: data,
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     mode: 'cors',
  //     ...args
  //   })
  // }

  async request(
    method: string,
    endpoint: string,
    data: any,
    args?: RequestInit
  ): Promise<Response> {
    return await fetch(`${this.rootUrl}/${endpoint}`, {
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
