import { type IPostResponseDto } from 'Client/posts/types'
import { PostCard } from 'Components/PostCard'
import { PostsCollection } from 'Pages/Posts/styles'
import { useLoaderData } from 'react-router-dom'

export const PostsPage = (): JSX.Element => {
  const posts: IPostResponseDto[] = useLoaderData() as IPostResponseDto[]

  return (
    <PostsCollection>
      {posts.map((post) => (
        <PostCard {...post} key={post.id} />
      ))}
    </PostsCollection>
  )
}
