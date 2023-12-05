import { Button } from 'Components/button/styles'
import { CardWrapper } from 'Components/cardWrapper'
import { Input } from 'Components/input'
import { Row } from 'Components/styles/generic'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { type IPostResponseDto } from 'Client/posts/types'
import { FormWrapper } from 'Components/formWrapper'
import { TextEditor } from 'Components/textEditor'
import { type IPostEditForm } from 'Pages/postEdit/types'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { PostsClientInstance } from 'Client/posts'

export const PostEditFormPage = (): JSX.Element => {
  const { id, title, text } = useLoaderData() as IPostResponseDto

  const { setValue, register, handleSubmit } = useForm<IPostEditForm>()

  const navigate = useNavigate()
  const editPostHandler: SubmitHandler<IPostEditForm> = async (
    postEditData
  ) => {
    const resp = await PostsClientInstance.updatePost(id, postEditData)

    if (resp.success) {
      navigate('/posts')
    }
  }

  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(editPostHandler)}>
        <FormWrapper title='Edit post'>
          <Row>
            <label>Post title</label>
            <Input
              type='text'
              {...register('title', {
                required: true,
                minLength: 2
              })}
              defaultValue={title}
            />
          </Row>
          <TextEditor
            onSave={(editorContent) => {
              setValue('text', editorContent)
            }}
            name='text'
            initialValue={text}
          />
          <Button type='submit'>Submit</Button>
        </FormWrapper>
      </form>
    </CardWrapper>
  )
}
