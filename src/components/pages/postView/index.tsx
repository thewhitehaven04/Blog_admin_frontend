import { type IPostResponseDto } from 'Client/posts/types'
import { Post } from 'Components/Posts/Post'
import { Outlet, useLoaderData } from 'react-router-dom'

export const PostViewPage = (): JSX.Element => {
  const { title, text, author, published } = useLoaderData() as IPostResponseDto

  return (
    <>
      <Post title={title} text={text} author={author} published={published} />
      <Outlet />
    </>
  )
}
