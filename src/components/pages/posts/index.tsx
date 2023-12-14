import { type IPostResponseDto } from 'Client/posts/types'
import { withLoadingOnFetch } from 'Components/HOC/Loading'
import { PostCard } from 'Components/Posts/PostCard'
import { ERequestState, type TRequestState } from 'Hooks/client/useRequest'
import { usePosts } from 'Hooks/fetching/posts'
import { PostsCollection } from 'Pages/Posts/styles'
import { PostsQueryParamsSchema } from 'Pages/Posts/validation'
import { useSearchParams } from 'react-router-dom'

export const PostsPage = (): JSX.Element => {
  const [searchParams] = useSearchParams()

  const validatedParams = PostsQueryParamsSchema.validateSync(
    Object.fromEntries(searchParams.entries())
  )
  const posts = usePosts(validatedParams)

  return (<LoadedPosts {...posts}/>)
}

export const Posts = ({ data }: { data: IPostResponseDto[] }): JSX.Element => (
  <PostsCollection>
    {data.map((post) => (
      <PostCard {...post} key={post.id} />
    ))}
  </PostsCollection>
)

export const LoadedPosts = withLoadingOnFetch(Posts)
