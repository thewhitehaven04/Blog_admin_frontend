import { yupResolver } from '@hookform/resolvers/yup'
import { PostsClientInstance } from 'Client/posts'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { BaseFormLayout } from 'Components/Common/Forms/BaseFormLayout'
import { Input } from 'Components/Common/Forms/Input'
import { ValidatedField } from 'Components/Common/Forms/ValidatedField'
import { type IPostEditFormProps } from 'Components/Posts/PostEditForm/types'
import { Column } from 'Components/Styles/Common'
import { TextEditor } from 'Components/TextEditor'
import { type IPostEditForm } from 'Pages/PostEdit/types'
import { PostEditValidatorSchema } from 'Pages/PostEdit/validation'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const PostEditForm = ({
  id,
  text,
  title
}: IPostEditFormProps): JSX.Element => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IPostEditForm>({
    resolver: yupResolver(PostEditValidatorSchema),
    defaultValues: {
      text
    }
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
