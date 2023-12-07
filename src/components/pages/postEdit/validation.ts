import { object, string } from 'yup'

export const PostEditValidatorSchema = object({
  title: string().required('Title must not be empty'),
  text: string().required('Post text must not be empty')
})