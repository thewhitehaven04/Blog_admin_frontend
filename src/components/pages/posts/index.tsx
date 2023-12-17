import { type IPostsCollectionDto } from 'Client/posts/types'
import { withLoadingOnFetch } from 'Components/HOC/Loading'
import { Pagination } from 'Components/Layout/Pagination'
import { PostsCollection } from 'Components/Posts/PostsCollection'
import { usePaginationContext } from 'Hooks/context/usePagination'
import { usePosts } from 'Hooks/fetching/posts'

const PostsList = withLoadingOnFetch<IPostsCollectionDto>(({ data }) => (
  <PostsCollection posts={data.posts} />
))

const PostPagination = withLoadingOnFetch<IPostsCollectionDto>(({ data }) => {
  const { count } = usePaginationContext()
  return <Pagination totalCount={data.totalCount} pageSize={count} />
})

export const PostsPage = (): JSX.Element => {
  const params = usePaginationContext()

  const posts = usePosts(params)

  return (
    <>
      <PostsList {...posts} />
      <PostPagination {...posts} />
    </>
  )
}
