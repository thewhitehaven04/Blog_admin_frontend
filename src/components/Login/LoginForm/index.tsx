import { BaseFormLayout } from 'Components/Common/Forms/BaseFormLayout'
import { Input } from 'Components/Common/Forms/Input/styles'
import { CardWrapper } from 'Components/Common/CardWrapper/styles'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type ILoginForm } from 'Components/Login/LoginForm/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormValidatorSchema } from 'Components/Login/LoginForm/validation'
import { ValidatedField } from 'Components/Common/Forms/ValidatedField'
import { useAuthenticate } from 'Hooks/authenticate'

export const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({
    resolver: yupResolver(LoginFormValidatorSchema)
  })

  const { submissionErrors, submit } = useAuthenticate()

  const loginHandler: SubmitHandler<ILoginForm> = async (
    loginFormFieldData
  ) => {
    await submit(loginFormFieldData)
  }

  return (
    <CardWrapper>
      <form onSubmit={handleSubmit(loginHandler)}>
        <BaseFormLayout
          title='Login'
          errors={submissionErrors}
          submitButtonText='Login'
        >
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
        </BaseFormLayout>
      </form>
    </CardWrapper>
  )
}
