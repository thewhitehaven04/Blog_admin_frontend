import { TGenericResponse } from 'Client/base/types'
import { IFormattedPostDto } from 'Client/posts/types'
import { withLoadingOnFetch } from 'Components/HOC/Loading'
import { PostEditForm } from 'Components/Posts/PostEditForm'
import { usePost } from 'Hooks/fetching/post'
import { useParams } from 'react-router-dom'

const EditForm = withLoadingOnFetch<
  IFormattedPostDto,
  TGenericResponse<IFormattedPostDto>
>(({ data }) => <PostEditForm {...data} />)

export const PostEditFormPage = (): JSX.Element => {
  const { id } = useParams<'id'>()
  const post = usePost(id ?? '')

  return <EditForm {...post} />
}
