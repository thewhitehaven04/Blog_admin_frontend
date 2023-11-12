import appConfig from '@/appConfig'
import { useUserContext } from '@/hooks/useUserContext'
import { useUserDispatchContext } from '@/hooks/useUserDispatchContext'
import AuthClient from 'Client/auth'
import { FormControl } from 'Components/formControlRow'
import { FormWrapper } from 'Components/formWrapper'
import { type Payload, jwtDecode } from 'jwt-decode'
import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Form, Navigate } from 'react-router-dom'

export const LoginForm = (): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const user = useUserContext()
  const userDispatch = useUserDispatchContext()

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()
    // need to account for error message 
    const userData = await new AuthClient(appConfig.apiRootUrl).auth({
      username,
      password
    })
    if (userData.success && userData.data != null) {
      const payload: Payload = jwtDecode(userData.data?.token)
      userDispatch(payload)
    }
  }

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value ?? '')
  }
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value ?? '')
  }

  return (
    <>
      {user != null && <Navigate to='/' />}
      <FormWrapper title='Login'>
        <Form
          onSubmit={(e) => {
            void handleSubmit(e)
          }}
        >
          <FormControl>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              type='text'
              name='username'
              onChange={handleUsernameChange}
            />
          </FormControl>
          <FormControl>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              onChange={handlePasswordChange}
            />
          </FormControl>
          <button type='submit'>Login</button>
        </Form>
      </FormWrapper>
    </>
  )
}
