import { PostsCollection } from 'Components/Posts/PostsCollection'
import { usePosts } from 'Hooks/fetching/posts'
import { PostsQueryParamsSchema } from 'Pages/Posts/validation'
import { useSearchParams } from 'react-router-dom'

export const PostsPage = (): JSX.Element => {
  const [searchParams] = useSearchParams()

  const validatedParams = PostsQueryParamsSchema.validateSync(
    Object.fromEntries(searchParams.entries())
  )
  const posts = usePosts(validatedParams)

  return <PostsCollection {...posts} />
}
