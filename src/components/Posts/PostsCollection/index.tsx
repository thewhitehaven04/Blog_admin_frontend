import { PostCard } from 'Components/Posts/PostCard'
import { type IPostCollectionProps } from 'Components/Posts/PostsCollection/types'
import { PostsList } from 'Pages/Posts/styles'

export const PostsCollection = ({
  posts
}: IPostCollectionProps): JSX.Element => {
  return (
    <PostsList>
      {posts.map((post) => (
        <PostCard {...post} author={post.author.username} key={post.id} />
      ))}
    </PostsList>
  )
}
