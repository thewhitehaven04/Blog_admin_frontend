import { type TGenericResponse } from 'Client/base/types'
import { ERequestState, type TRequestState } from 'Hooks/client/useRequest'
import { type FC } from 'react'

export function withLoadingOnFetch<T>(component: FC<{ data: T }>) {
  return function (props: TRequestState<TGenericResponse<T>>) {
    const { status, response } = props

    if (status === ERequestState.SUCCESS && response.success) {
      return component({ data: response.data })
    } else if (status === ERequestState.PENDING) {
      return <span>Loading</span>
    }
    return <span>Error</span>
  }
}
