import { Button } from 'Components/Common/Button/styles'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { Input } from 'Components/Forms/Input'
import { Row } from 'Components/Styles/Common'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { type IPostResponseDto } from 'Client/posts/types'
import { FormWrapper } from 'Components/Forms/FormWrapper'
import { TextEditor } from 'Components/TextEditor'
import { type IPostEditForm } from 'Pages/PostEdit/types'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { PostsClientInstance } from 'Client/posts'
import { useState } from 'react'

export const PostEditFormPage = (): JSX.Element => {
  const { id, title, text } = useLoaderData() as IPostResponseDto

  const { setValue, register, handleSubmit } = useForm<IPostEditForm>()
  const [errors, setErrors] = useState<string[]>([])

  const navigate = useNavigate()
  const editPostHandler: SubmitHandler<IPostEditForm> = async (
    postEditData
  ) => {
    const [responseErrors] = await PostsClientInstance.updatePost(id, postEditData)

    if (responseErrors == null) {
      navigate('/posts')
    }
    else {
      setErrors(errors)
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
