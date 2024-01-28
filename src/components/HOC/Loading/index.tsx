import {
  IErrorResponse,
  TGenericResponse,
  TPaginatedResponse
} from 'Client/base/types'
import { FetchError } from 'Components/Common/FetchError'
import { LoadingComponent } from 'Components/Common/Loading'
import { ERequestState, type TRequestState } from 'Hooks/client/useRequest'
import { type FC } from 'react'

export function withLoadingOnFetch<
  K,
  T extends TGenericResponse<K> | TPaginatedResponse<K>
>(component: FC<Exclude<T, IErrorResponse>>) {
  // called from the component
  return function (props: TRequestState<T>) {
    const { status, response } = props

    if (
      status === ERequestState.SUCCESS &&
      response != null &&
      response.success
    ) {
      return component(response as Exclude<T, IErrorResponse>)
    } else if (status === ERequestState.PENDING) {
      return <LoadingComponent />
    }
    return <FetchError />
  }
}
