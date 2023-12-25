import { PostsClientInstance } from 'Client/posts'
import { CardWrapper } from 'Components/Common/CardWrapper/styles'
import { BaseFormLayout } from 'Components/Common/Forms/BaseFormLayout'
import { Input } from 'Components/Common/Forms/Input/styles'
import { ValidatedField } from 'Components/Common/Forms/ValidatedField'
import { Column } from 'Components/Common/Column/styles'
import { TextEditor } from 'Components/TextEditor'
import { useUserContext } from 'Hooks/context/useUserContext'
import { type IPostCreateForm } from 'Pages/PostCreate/types'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useFormSubmit } from 'Hooks/forms/submit'
import { Navigate } from 'react-router-dom'

export const PostCreateForm = (): JSX.Element => {
  const user = useUserContext()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IPostCreateForm>()

  const { isSuccessful, submissionErrors, submit } = useFormSubmit({
    submitCallback: async (data) => await PostsClientInstance.createPost(data)
  })

  const createPostSubmitHandler: SubmitHandler<IPostCreateForm> = async (
    formInputsData
  ) => {
    await submit({ ...formInputsData, author: user?.id ?? '' })
  }

  if (isSuccessful === true) {
    return <Navigate to='/posts' />
  }

  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(createPostSubmitHandler)}>
        <BaseFormLayout
          title='New post'
          submitButtonText='Submit'
          errors={submissionErrors}
        >
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
              <Input
                type='datetime-local'
                width='150px'
                {...register('published')}
              />
            </ValidatedField>
            <TextEditor
              initialValue=''
              name='text'
              label='Post content'
              onSave={(editorContent) => {
                setValue('text', editorContent)
              }}
              required
            />
          </Column>
        </BaseFormLayout>
      </form>
    </CardWrapper>
  )
}
