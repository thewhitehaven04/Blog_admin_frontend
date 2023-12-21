import { type TGenericResponse } from 'Client/base/types'
import { PostsClientInstance } from 'Client/posts'
import { Modal } from 'Components/Common/Modal'
import { useNavigate, useParams } from 'react-router-dom'

export const DeletePostModal = (): JSX.Element => {
  const { id } = useParams<'id'>()
  const navigate = useNavigate()

  const deletePost = async (): Promise<void> => {
    const data = (await (
      await PostsClientInstance.deletePost(id ?? '')
    ).json()) as TGenericResponse

    if (data == null) {
      /** should also clear browser history api from the last
       * entry after successful removal to prevent the 'back' button from
       * directing the user back to removal form */
      navigate(`/posts`)
    }
  }

  const closeModalHandler = (): void => {
    navigate(`/post/${id}`)
  }

  return (
    <Modal
      accept={deletePost}
      close={closeModalHandler}
      title='Are you sure?'
      text='Do you want to delete this post? This action is irreversible.'
    />
  )
}
