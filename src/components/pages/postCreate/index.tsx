import { yupResolver } from '@hookform/resolvers/yup'
import { PostsClientInstance } from 'Client/posts'
import { Button } from 'Components/Common/Button/styles'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { BaseFormLayout } from 'Components/Forms/BaseFormLayout'
import { Input } from 'Components/Forms/Input'
import { ValidatedField } from 'Components/Forms/ValidatedField'
import { Column, Row } from 'Components/Styles/Common'
import { TextEditor } from 'Components/TextEditor'
import { useUserContext } from 'Hooks/useUserContext'
import { type IPostCreateForm } from 'Pages/PostCreate/types'
import { CreatePostValidatorSchema } from 'Pages/PostCreate/validation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const PostCreateForm = (): JSX.Element => {
  const user = useUserContext()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IPostCreateForm>({
    resolver: yupResolver(CreatePostValidatorSchema)
  })

  const navigate = useNavigate()
  const createPostSubmitHandler: SubmitHandler<IPostCreateForm> = async (
    formInputsData
  ) => {
    const [submitErrors] = await PostsClientInstance.createPost({
      ...formInputsData,
      author: user?.id ?? ''
    })

    submitErrors == null && navigate('/posts')
  }

  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(createPostSubmitHandler)}>
        <BaseFormLayout title='New post' submitButtonText='Submit'>
          <Column>
            <ValidatedField
              label='Title'
              labelFor='title'
              vertical
              required
              errorMessage={errors.title?.message ?? null}
            >
              <Input type='text' {...register('title')} />
            </ValidatedField>
            <ValidatedField
              label='Publish at'
              labelFor='published'
              vertical
              required
              errorMessage={errors.published?.message ?? null}
            >
              <Input type='datetime-local' {...register('published')} />
            </ValidatedField>
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
        </BaseFormLayout>
      </form>
    </CardWrapper>
  )
}
