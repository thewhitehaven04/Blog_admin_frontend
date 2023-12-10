import { type TResponseError, type TGenericResponse } from 'Client/base/types'
import { getAccessToken } from 'Service/accessToken'

const SUCCESSFUL_RESPONSE_STATUS_CODE = 200

export default class BaseApiClient {
  rootUrl: string

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl
  }

  async request<T, K = TResponseError>(
    method: string,
    endpoint: string,
    queryParams?: Record<string, any>,
    data?: any,
    args?: RequestInit
  ): Promise<[K, null] | [null, T]> {
    const params = new URLSearchParams(queryParams).toString()
    const response = await fetch(`${this.rootUrl}/${endpoint}?${params}`, {
      ...args,
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        ...args?.headers
      },
      body: JSON.stringify(data)
    })

    // return Promises from base client class
    // change validator so that it responds with an array of strings

    if (response.ok) {
      const json = (await response.json()) as TGenericResponse<T>
      if (
        (response.status === SUCCESSFUL_RESPONSE_STATUS_CODE && json.success) ||
        json.success
      ) {
        return [null, json.data]
      }
      return [json.errors, null]
    }

    throw new Error(`API request error: ${response.status}`)
  }

  async authorizedRequest<T>(
    method: string,
    endpoint: string,
    queryParams?: Record<string, any>,
    data?: any,
    args?: RequestInit
  ): Promise<[TResponseError, null] | [null, T]> {
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
