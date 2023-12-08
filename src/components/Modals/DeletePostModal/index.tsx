import { PostsClientInstance } from 'Client/posts'
import { Modal } from 'Components/Common/Modal'
import { useNavigate, useParams } from 'react-router-dom'

export const DeletePostModal = (): JSX.Element => {
  const { id } = useParams<'id'>()
  const navigate = useNavigate()

  const deletePost = async (): Promise<void> => {
    const [errors] = await PostsClientInstance.deletePost(id ?? '')

    if (errors == null) {
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
      text='Do you want to delete this post? This action is irreverisble.'
    />
  )
}
