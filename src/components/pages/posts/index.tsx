import { type IPostsCollectionDto } from 'Client/posts/types'
import { withLoadingOnFetch } from 'Components/HOC/Loading'
import { Pagination } from 'Components/Layout/Pagination'
import { PostsCollection } from 'Components/Posts/PostsCollection'
import { usePosts } from 'Hooks/fetching/posts'
import { PostsQueryParamsSchema } from 'Pages/Posts/validation'
import { useSearchParams } from 'react-router-dom'

const PostsList = withLoadingOnFetch(
  ({ data }: { data: IPostsCollectionDto }) => (
    <PostsCollection posts={data.posts} />
  )
)

const PostPagination = withLoadingOnFetch<IPostsCollectionDto>(({ data }) => {
  const [searchParams] = useSearchParams()
  const validatedParams = PostsQueryParamsSchema.validateSync(
    Object.fromEntries(searchParams.entries())
  )

  return (
    <Pagination
      totalCount={data.totalCount}
      pageSize={validatedParams.count}
    />
  )
})

export const PostsPage = (): JSX.Element => {
  const [searchParams] = useSearchParams()

  const validatedParams = PostsQueryParamsSchema.validateSync(
    Object.fromEntries(searchParams.entries())
  )
  const posts = usePosts(validatedParams)

  return (
    <>
      <PostsList {...posts} />
      <PostPagination {...posts} />
    </>
  )
}
