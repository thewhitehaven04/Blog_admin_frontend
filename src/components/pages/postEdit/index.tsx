import { Button } from 'Components/Common/Button/styles'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { Input } from 'Components/Forms/Input'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { type IPostResponseDto } from 'Client/posts/types'
import { BaseFormLayout } from 'Components/Forms/BaseFormLayout'
import { TextEditor } from 'Components/TextEditor'
import { type IPostEditForm } from 'Pages/PostEdit/types'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { PostsClientInstance } from 'Client/posts'
import { useState } from 'react'
import { ValidatedField } from 'Components/Forms/ValidatedField'
import { yupResolver } from '@hookform/resolvers/yup'
import { PostEditValidatorSchema } from 'Pages/PostEdit/validation'
import { Column } from 'Components/Styles/Common'

export const PostEditFormPage = (): JSX.Element => {
  const { id, title, text } = useLoaderData() as IPostResponseDto

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IPostEditForm>({
    resolver: yupResolver(PostEditValidatorSchema)
  })
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const navigate = useNavigate()
  const editPostHandler: SubmitHandler<IPostEditForm> = async (
    postEditData
  ) => {
    const [responseErrors] = await PostsClientInstance.updatePost(
      id,
      postEditData
    )

    if (responseErrors == null) {
      navigate('/posts')
    } else {
      setValidationErrors(validationErrors)
    }
  }

  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(editPostHandler)}>
        <BaseFormLayout
          title='Edit post'
          errors={validationErrors}
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
