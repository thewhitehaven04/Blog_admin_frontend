import { type IPostResponseDto } from 'Client/posts/types'
import { CardWrapper } from 'Components/cardWrapper'
import { useLoaderData } from 'react-router-dom'

export const PostsPage = (): JSX.Element => {
  const posts: IPostResponseDto[] = useLoaderData() as IPostResponseDto[]

  return (
    <>
      {posts.map((post, index) => (
        <CardWrapper key={index}>
          <span>{post.title}</span>
          <span>{post.text}</span>
          <span>Last update: {post.published}</span>
          <span>{post.author}</span>
        </CardWrapper>
      ))}
    </>
  )
}
