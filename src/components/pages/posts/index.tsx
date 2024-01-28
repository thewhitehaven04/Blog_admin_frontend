import { TPaginatedResponse } from 'Client/base/types'
import { IFormattedPostDto } from 'Client/posts/types'
import { withLoadingOnFetch } from 'Components/HOC/Loading'
import { Pagination } from 'Components/Layout/Pagination'
import { PostsCollection } from 'Components/Posts/PostsCollection'
import { usePosts } from 'Hooks/fetching/posts'
import { usePagination } from 'Hooks/pagination'

const PostsPageContent = withLoadingOnFetch<
  IFormattedPostDto,
  TPaginatedResponse<IFormattedPostDto>
>(({ data, pagination }) => {
  return (
    <>
      <PostsCollection posts={data} />
      <Pagination {...pagination} />
    </>
  )
})

export const PostsPage = (): JSX.Element => {
  const params = usePagination()
  const posts = usePosts(params)

  return <PostsPageContent {...posts} />
}
