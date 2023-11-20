import { type IPostResponseDto } from 'Client/posts/types'
import { useOutletContext } from 'react-router-dom'

export const usePostContext = (): IPostResponseDto => {
  return useOutletContext<IPostResponseDto>()
}
