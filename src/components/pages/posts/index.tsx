import { type IPostsCollectionDto } from 'Client/posts/types'
import { withLoadingOnFetch } from 'Components/HOC/Loading'
import { Pagination } from 'Components/Layout/Pagination'
import { PostsCollection } from 'Components/Posts/PostsCollection'
import { usePosts } from 'Hooks/fetching/posts'
import { usePagination } from 'Hooks/pagination'

const PostsPageContent = withLoadingOnFetch<IPostsCollectionDto>(({ data }) => {
  const { count } = usePagination()

  return (
    <>
      <PostsCollection posts={data.posts} />
      <Pagination totalCount={data.totalCount} pageSize={count} />
    </>
  )
})

export const PostsPage = (): JSX.Element => {
  const params = usePagination()
  const posts = usePosts(params)

  return <PostsPageContent {...posts} />
}
