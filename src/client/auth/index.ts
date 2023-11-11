export default class AuthClient {
  rootUrl: string

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl
  }

  async auth(loginData: FormData) {
    return await fetch(`${this.rootUrl}/login/authenticate`, {
      headers: {
        'Content-Type': 'application/x-www-form-encoded'
      },
      body: loginData,
      mode: 'cors'
    })
  }
}