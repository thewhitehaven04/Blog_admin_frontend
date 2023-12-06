import { object, string } from 'yup'

export const LoginFormValidatorSchema = object({
  username: string().required('Username must not be empty!'),
  password: string().required('Password must not be empty!').min(8)
})
