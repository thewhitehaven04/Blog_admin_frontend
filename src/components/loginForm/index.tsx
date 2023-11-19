import { FormControl } from 'Components/formControlRow'
import { FormWrapper } from 'Components/formWrapper'
import { Input } from 'Components/input'
import { ROUTES_LIST } from 'Components/router/routes'
import { useUserContext } from 'Hooks/useUserContext'
import { useUserDispatchContext } from 'Hooks/useUserDispatchContext'
import { AuthService } from 'Service/authService'
import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Form, Navigate } from 'react-router-dom'

export const LoginForm = (): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const user = useUserContext()
  const userDispatch = useUserDispatchContext()

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    const [error, payload] = await AuthService.authenticate({
      username,
      password
    })

    if (payload != null) {
      userDispatch(payload)
    }
    setErrorMessage(error)
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value ?? '')
  }
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value ?? '')
  }

  return (
    <>
      {user != null && <Navigate to={ROUTES_LIST.posts} />}
      <Form
        onSubmit={(e) => {
          void handleSubmit(e)
        }}
      >
        <FormWrapper title='Login'>
          {errorMessage != null && <span>errorMessage</span>}
          <FormControl>
            <label htmlFor='username'>Username</label>
            <Input
              id='username'
              type='text'
              name='username'
              onChange={handleUsernameChange}
            />
          </FormControl>
          <FormControl>
            <label htmlFor='password'>Password</label>
            <Input
              type='password'
              name='password'
              onChange={handlePasswordChange}
            />
          </FormControl>
          <button type='submit'>Login</button>
        </FormWrapper>
      </Form>
    </>
  )
}
