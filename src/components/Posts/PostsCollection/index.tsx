import { type IPostsCollectionDto } from 'Client/posts/types'
import { withLoadingOnFetch } from 'Components/HOC/Loading'
import { PostCard } from 'Components/Posts/PostCard'
import { PostsList } from 'Pages/Posts/styles'

export const Posts = ({ data }: { data: IPostsCollectionDto }): JSX.Element => {
  const { posts } = data

  return (
    <PostsList>
      {posts.map((post) => (
        <PostCard {...post} author={post.author.username} key={post.id} />
      ))}
    </PostsList>
  )
}

export const PostsCollection = withLoadingOnFetch(Posts)
