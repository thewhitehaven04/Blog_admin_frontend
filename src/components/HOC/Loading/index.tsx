import { type TGenericResponse } from 'Client/base/types'
import { ErrorComponent } from 'Components/Common/Error'
import { LoadingComponent } from 'Components/Common/Loading'
import { type ILoadable } from 'Components/HOC/Loading/types'
import { ERequestState, type TRequestState } from 'Hooks/client/useRequest'
import { type FC } from 'react'

export function withLoadingOnFetch<T>(component: FC<ILoadable<T>>) {
  return function (props: TRequestState<TGenericResponse<T>>) {
    const { status, response } = props

    if (status === ERequestState.SUCCESS && response.success) {
      return component({ ...props, data: response.data })
    } else if (status === ERequestState.PENDING) {
      return <LoadingComponent />
    }
    return <ErrorComponent />
  }
}
