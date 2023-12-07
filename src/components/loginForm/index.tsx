import { BaseFormLayout } from 'Components/Forms/BaseFormLayout'
import { Input } from 'Components/Forms/Input'
import { useUserContext } from 'Hooks/useUserContext'
import { useUserDispatchContext } from 'Hooks/useUserDispatchContext'
import { AuthService } from 'Service/authService'
import { CardWrapper } from 'Components/Common/CardWrapper'
import { Navigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type ILoginForm } from 'Components/LoginForm/types'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormValidatorSchema } from 'Components/LoginForm/validation'
import { ValidatedField } from 'Components/Forms/ValidatedField'

export const LoginForm = (): JSX.Element => {
  const user = useUserContext()
  const userDispatch = useUserDispatchContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({
    resolver: yupResolver(LoginFormValidatorSchema)
  })

  const [submitErrors, setSubmitErrors] = useState<string[]>([])

  const loginHandler: SubmitHandler<ILoginForm> = async (
    loginFormFieldData
  ) => {
    const [error, payload] = await AuthService.authenticate(loginFormFieldData)

    if (payload != null) {
      userDispatch(payload)
    }

    if (error != null) {
      setSubmitErrors([error])
    }
  }

  if (user != null) {
    return <Navigate to='/posts' />
  }

  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(loginHandler)}>
        <BaseFormLayout title='Login' errors={submitErrors}>
          <ValidatedField
            label='Username'
            labelFor='username'
            errorMessage={errors.username?.message ?? null}
            required
          >
            <Input id='username' type='text' {...register('username')} />
          </ValidatedField>
          <ValidatedField
            label='Password'
            labelFor='password'
            errorMessage={errors.password?.message ?? null}
            required
          >
            <Input id='password' type='password' {...register('password')} />
          </ValidatedField>
          <button type='submit'>Login</button>
        </BaseFormLayout>
      </form>
    </CardWrapper>
  )
}
