import { useEffect, useState } from 'react'

export enum ERequestState {
  PENDING,
  SUCCESS,
  ERROR
}

export type TRequestState<T> =
  | { status: ERequestState.SUCCESS; response: T }
  | { status: ERequestState.PENDING; response: null }
  | { status: ERequestState.ERROR; response: null }

export function useRequest<T>(
  requestCallback: () => Promise<Response>
): TRequestState<T> {
  const [requestState, setRequestState] = useState<TRequestState<T>>({
    status: ERequestState.PENDING,
    response: null
  })

  useEffect(() => {
    let ignoreRequest = false

    async function fetch(): Promise<void> {
      const request = requestCallback()

      request
        .then((response) => {
          return response.json() as T
        })
        .then((json) => {
          if (!ignoreRequest) {
            setRequestState({
              status: ERequestState.SUCCESS,
              response: json
            })
          }
        })
        .catch((error) => {
          if (!ignoreRequest) {
            setRequestState({
              status: ERequestState.ERROR,
              response: null
            })
          }
          console.error(error)
        })
    }

    void fetch()
    return () => {
      ignoreRequest = true
    }
  }, [requestCallback])

  return requestState
}
