import { type IPostResponseDto } from 'Client/posts/types'
import { PostEditForm } from 'Components/postEditForm'
import { useLoaderData } from 'react-router-dom'

export const PostEditPage = (): JSX.Element => {
  const post = useLoaderData() as IPostResponseDto

  return (
    <>
      <PostEditForm {...post} />
    </>
  )
}
