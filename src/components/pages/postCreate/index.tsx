import { PostsClientInstance } from 'Client/posts'
import { Button } from 'Components/Common/Button/styles'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { FormWrapper } from 'Components/Forms/FormWrapper'
import { Input } from 'Components/Forms/Input'
import { Column, Row } from 'Components/Styles/Common'
import { TextEditor } from 'Components/TextEditor'
import { useUserContext } from 'Hooks/useUserContext'
import { type IPostCreateForm } from 'Pages/PostCreate/types'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const PostCreateForm = (): JSX.Element => {
  const user = useUserContext()

  const { register, handleSubmit, setValue } = useForm<IPostCreateForm>()

  const navigate = useNavigate()
  const createPostSubmitHandler: SubmitHandler<IPostCreateForm> = async (
    formInputsData
  ) => {
    const resp = await PostsClientInstance.createPost({
      ...formInputsData,
      author: user?.id ?? ''
    })
    if (resp.success) {
      navigate('/posts')
    }
  }

  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(createPostSubmitHandler)}>
        <FormWrapper title='New post'>
          <Column>
            <Row $justify='start'>
              <label htmlFor='title'>Title</label>
              <Input type='text' {...register('title')} />
            </Row>
            <Row $justify='start' $alignment='center'>
              <label htmlFor='published'>Publishing date</label>
              <Input type='datetime-local' {...register('published')} />
            </Row>
            <Column>
              <label htmlFor='text'>Text</label>
              <TextEditor
                initialValue=''
                name='text'
                onSave={(editorContent) => {
                  setValue('text', editorContent)
                }}
              />
            </Column>
          </Column>
          <Row $justify='end'>
            <Button type='submit'>Create</Button>
          </Row>
        </FormWrapper>
      </form>
    </CardWrapper>
  )
}
