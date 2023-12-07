import * as yup from 'yup'

export const CreatePostValidatorSchema = yup.object({
  title: yup.string().required(),
  text: yup.string().required(),
  published: yup.string().required(),
}) 