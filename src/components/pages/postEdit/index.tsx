import { type IPostResponseDto } from 'Client/posts/types'
import { PostEditForm } from 'Components/Posts/PostEditForm'
import { useLoaderData } from 'react-router-dom'

export const PostEditFormPage = (): JSX.Element => {
  const { id, title, text } = useLoaderData() as IPostResponseDto

  return <PostEditForm id={id} title={title} text={text} />
}
