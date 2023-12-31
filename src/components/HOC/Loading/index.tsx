import { type TGenericResponse } from 'Client/base/types'
import { FetchError } from 'Components/Common/FetchError'
import { LoadingComponent } from 'Components/Common/Loading'
import { type ILoadable } from 'Components/HOC/Loading/types'
import { ERequestState, type TRequestState } from 'Hooks/client/useRequest'
import { type FC } from 'react'

export function withLoadingOnFetch<T>(component: FC<ILoadable<T>>) {
  return function (props: TRequestState<TGenericResponse<T>>) {
    const { status, response } = props

    if (
      status === ERequestState.SUCCESS &&
      response != null &&
      response.success
    ) {
      return component({ data: response.data })
    } else if (status === ERequestState.PENDING) {
      return <LoadingComponent />
    }
    return <FetchError/> 
  }
}
