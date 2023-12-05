import { FormWrapper } from 'Components/Forms/FormWrapper'
import { Input } from 'Components/Forms/Input'
import { useUserContext } from 'Hooks/useUserContext'
import { useUserDispatchContext } from 'Hooks/useUserDispatchContext'
import { AuthService } from 'Service/authService'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { Row } from 'Components/Styles/Common'
import { useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type ILoginForm } from 'Components/LoginForm/types'
import { useState } from 'react'

export const LoginForm = (): JSX.Element => {
  const user = useUserContext()
  const userDispatch = useUserDispatchContext()

  const { register, handleSubmit } = useForm<ILoginForm>()

  const [errors, setErrors] = useState<string[]>([])

  const loginHandler: SubmitHandler<ILoginForm> = async (
    loginFormFieldData
  ) => {
    const [error, payload] = await AuthService.authenticate(loginFormFieldData)

    if (payload != null) {
      userDispatch(payload)
    }

    if (error != null) {
      setErrors([error])
    }
  }

  const navigate = useNavigate()
  if (user != null) {
    navigate('/posts')
  }

  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(loginHandler)}>
        <FormWrapper title='Login' errors={errors}>
          <Row $justify='between'>
            <label htmlFor='username'>Username</label>
            <Input id='username' type='text' {...register('username')} />
          </Row>
          <Row $justify='between'>
            <label htmlFor='password'>Password</label>
            <Input id='password' type='password' {...register('password')} />
          </Row>
          <button type='submit'>Login</button>
        </FormWrapper>
      </form>
    </CardWrapper>
  )
}
