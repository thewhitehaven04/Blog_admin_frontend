import { type IPostResponseDto } from 'Client/posts/types'
import { Outlet, useLoaderData } from 'react-router-dom'

export const PostPage = (): JSX.Element => {
  const post = useLoaderData() as IPostResponseDto

  return <Outlet context={post} />
}
