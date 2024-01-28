import { PostsClientInstance } from 'Client/posts'
import {
  TGetPostsResponse,
  type IGetPostsRequestParamsDto,
} from 'Client/posts/types'
import { useRequest, type TRequestState } from 'Hooks/client/useRequest'
import { useCallback } from 'react'

export function usePosts({
  count,
  offset
}: IGetPostsRequestParamsDto): TRequestState<
  TGetPostsResponse 
> {
  const cb = useCallback(
    async () => await PostsClientInstance.getPosts({ count, offset }),
    [count, offset]
  )

  return useRequest<TGetPostsResponse>(cb)
}
