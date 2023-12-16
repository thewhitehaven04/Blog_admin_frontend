import { yupResolver } from '@hookform/resolvers/yup'
import { PostsClientInstance } from 'Client/posts'
import { CardWrapper } from 'Components/Common/CardWrapper/styles'
import { BaseFormLayout } from 'Components/Common/Forms/BaseFormLayout'
import { Input } from 'Components/Common/Forms/Input/styles'
import { ValidatedField } from 'Components/Common/Forms/ValidatedField'
import { type IPostEditFormProps } from 'Components/Posts/PostEditForm/types'
import { Column } from 'Components/Common/Column/styles'
import { TextEditor } from 'Components/TextEditor'
import { type IPostEditForm } from 'Pages/PostEdit/types'
import { PostEditValidatorSchema } from 'Pages/PostEdit/validation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useFormSubmit } from 'Hooks/forms/submit'
import { Navigate } from 'react-router-dom'

export const PostEditForm = ({
  id,
  text,
  title
}: IPostEditFormProps): JSX.Element => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostEditForm>({
    resolver: yupResolver(PostEditValidatorSchema),
    defaultValues: {
      text
    }
  })
  const { isSuccessful, submissionErrors, submit } = useFormSubmit({
    submitCallback: async (id, data) =>
      await PostsClientInstance.updatePost(id, data)
  })

  const editPostHandler: SubmitHandler<IPostEditForm> = async (
    postEditData
  ) => {
    await submit(id, postEditData)
  }

  if (isSuccessful === true) {
    return <Navigate to='/posts'/>
  }

  return (
    <CardWrapper>
      <form
        onSubmit={handleSubmit(editPostHandler)}
      >
        <BaseFormLayout
          title='Edit post'
          errors={submissionErrors}
          submitButtonText='Submit'
        >
          <ValidatedField
            label='Title'
            labelFor='title'
            errorMessage={errors.title?.message ?? ''}
            vertical
            required
          >
            <Input
              type='text'
              {...register('title', {
                required: true,
                minLength: 2
              })}
              defaultValue={title}
            />
          </ValidatedField>
          <Column>
            <TextEditor
              onSave={(editorContent) => {
                setValue('text', editorContent)
              }}
              name='text'
              initialValue={text}
              label='Post content'
            />
          </Column>
        </BaseFormLayout>
      </form>
    </CardWrapper>
  )
}

