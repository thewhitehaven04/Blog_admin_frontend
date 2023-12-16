import { type TGenericResponse } from 'Client/base/types'
import { PostsClientInstance } from 'Client/posts'
import {
  type IGetPostsRequestParamsDto,
  type IPostsCollectionDto
} from 'Client/posts/types'
import { useRequest, type TRequestState } from 'Hooks/client/useRequest'
import { useCallback } from 'react'

export function usePosts({
  count,
  offset
}: IGetPostsRequestParamsDto): TRequestState<
  TGenericResponse<IPostsCollectionDto>
> {
  const cb = useCallback(
    async () => await PostsClientInstance.getPosts({ count, offset }),
    [count, offset]
  )

  return useRequest<TGenericResponse<IPostsCollectionDto>>(cb)
}
