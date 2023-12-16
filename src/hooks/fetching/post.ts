import { type TGenericResponse } from 'Client/base/types'
import { PostsClientInstance } from 'Client/posts'
import { type IFormattedPostDto } from 'Client/posts/types'
import { type TRequestState, useRequest } from 'Hooks/client/useRequest'
import { useCallback } from 'react'

export function usePost(
  id: string
): TRequestState<TGenericResponse<IFormattedPostDto>> {
  const cb = useCallback(
    async () => await PostsClientInstance.getPost(id),
    [id]
  )
  return useRequest<TGenericResponse<IFormattedPostDto>>(cb)
}
