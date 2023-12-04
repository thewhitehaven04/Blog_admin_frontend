import { postsClientInstance } from 'Client/posts'
import { Button } from 'Components/button/styles'
import { CardWrapper } from 'Components/cardWrapper'
import { FormWrapper } from 'Components/formWrapper'
import { Input } from 'Components/input'
import { Column, Row } from 'Components/styles/generic'
import { TextEditor } from 'Components/textEditor'
import { useUserContext } from 'Hooks/useUserContext'
import { type IPostCreateForm } from 'Pages/postCreate/types'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const PostCreateForm = (): JSX.Element => {
  const user = useUserContext()

  const { register, handleSubmit, setValue } = useForm<IPostCreateForm>()

  const navigate = useNavigate()
  const createPostSubmitHandler: SubmitHandler<IPostCreateForm> = async (
    formInputsData
  ) => {
    const resp = await postsClientInstance.createPost({
      ...formInputsData,
      author: user?.id ?? ''
    })
    if (resp.success) {
      navigate('/posts')
    } else {
      console.log(resp.errors)
    }
  }

  const { name } = register('text')

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
                name={name}
                onSave={(val) => {
                  setValue('text', val)
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
