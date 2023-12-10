import { useEffect, useState } from 'react'

export enum ERequestState {
  PENDING,
  SUCCESS,
  ERROR
}

export function useRequest<T>(
  request: Promise<Response>
): [ERequestState, T | null] {
  const [requestState, setRequestState] = useState<ERequestState>(
    ERequestState.PENDING
  )
  const [data, setData] = useState<null | T>(null)

  useEffect(() => {
    async function fetch(): Promise<void> {
      const response = await request

      if (response.ok) {
        setRequestState(ERequestState.SUCCESS)
        setData(await response.json())
      } else {
        setRequestState(ERequestState.ERROR)
        setData(null)
      }
    }

    void fetch()
  }, [request])

  return [requestState, data]
}
