import { BaseFormLayout } from 'Components/Common/Forms/BaseFormLayout'
import { Input } from 'Components/Common/Forms/Input/styles'
import { useUserDispatchContext } from 'Hooks/context/useUserDispatchContext'
import { AuthService } from 'Service/authService'
import { CardWrapper } from 'Components/Common/CardWrapper/styles'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type ILoginForm } from 'Components/Login/LoginForm/types'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormValidatorSchema } from 'Components/Login/LoginForm/validation'
import { ValidatedField } from 'Components/Common/Forms/ValidatedField'

export const LoginForm = (): JSX.Element => {
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
