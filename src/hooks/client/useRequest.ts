import { memo, useEffect, useMemo, useState } from 'react'

export enum ERequestState {
  PENDING,
  SUCCESS,
  ERROR
}

export interface TRequestState<T> {
  status: ERequestState
  response: T | null
}

export function useRequest<T>(
  requestCallback: () => Promise<Response>
): TRequestState<T> {
  const [requestState, setRequestState] = useState<TRequestState<T>>({
    status: ERequestState.PENDING,
    response: null
  })

  useEffect(() => {
    let ignoreRequest = false

    function fetch(): void {
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

    fetch()
    return () => {
      ignoreRequest = true
    }
  }, [requestCallback])

  return requestState 
}
