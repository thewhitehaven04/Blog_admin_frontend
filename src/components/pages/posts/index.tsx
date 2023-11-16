import { type IPostResponseDto } from 'Client/posts/types'
import { Post } from 'Components/post'
import { PostsCollection } from 'Pages/posts/styles'
import { useLoaderData } from 'react-router-dom'

export const PostsPage = (): JSX.Element => {
  const posts: IPostResponseDto[] = useLoaderData() as IPostResponseDto[]

  return (
    <PostsCollection>
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </PostsCollection>
  )
}
