import { withLoadingOnFetch } from 'Components/HOC/Loading'
import { PostEditForm } from 'Components/Posts/PostEditForm'
import { type IPostEditFormProps } from 'Components/Posts/PostEditForm/types'
import { usePost } from 'Hooks/fetching/post'
import { useParams } from 'react-router-dom'

const EditForm = withLoadingOnFetch<IPostEditFormProps>(({ data }) => (
  <PostEditForm {...data} />
))

export const PostEditFormPage = (): JSX.Element => {
  const { id } = useParams<'id'>()
  const post = usePost(id ?? '')

  return <EditForm {...post} />
}
