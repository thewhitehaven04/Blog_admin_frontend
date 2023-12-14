import { type TGenericResponse } from 'Client/base/types'
import { PostsClientInstance } from 'Client/posts'
import {
  type IPostResponseDto,
  type IGetPostsRequestParamsDto
} from 'Client/posts/types'
import { useRequest, type TRequestState } from 'Hooks/client/useRequest'
import { useCallback } from 'react'

export type TPostsState = TRequestState<IPostResponseDto[]>

export function usePosts(
  params: IGetPostsRequestParamsDto
): TRequestState<TGenericResponse<IPostResponseDto[]>> {
  const { count, offset } = params
  const cb = useCallback(
    async () => await PostsClientInstance.getPosts({ count, offset }),
    [count, offset]
  )

  return useRequest<TGenericResponse<IPostResponseDto[]>>(cb)
}
