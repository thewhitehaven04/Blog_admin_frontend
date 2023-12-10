import { LoginForm } from 'Components/Login/LoginForm'
import { useUserContext } from 'Hooks/useUserContext'
import { Navigate } from 'react-router-dom'

export const LoginPage = (): JSX.Element => {
  const user = useUserContext()

  if (user != null) {
    return <Navigate to='/posts' />
  }

  return (
    <LoginForm/>
  )
}