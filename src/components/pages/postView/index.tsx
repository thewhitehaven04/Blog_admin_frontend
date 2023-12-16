import { Post } from 'Components/Posts/Post'
import { usePost } from 'Hooks/fetching/post'
import { Outlet, useParams } from 'react-router-dom'

export const PostViewPage = (): JSX.Element => {
  const { id } = useParams<'id'>()
  const post = usePost(id ?? '')

  return (
    <>
      <Post {...post} />
      <Outlet />
    </>
  )
}
