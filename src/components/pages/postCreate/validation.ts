import * as yup from 'yup'

export const createPostValidationSchema = yup.object({
  title: yup.string().required(),
  text: yup.string().required(),
  published: yup.string().required(),
}) 