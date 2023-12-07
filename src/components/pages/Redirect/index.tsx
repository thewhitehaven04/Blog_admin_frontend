import appConfig from '@/appConfig'
import { useNavigate } from 'react-router-dom'

export const RedirectPage = (): JSX.Element => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, appConfig.redirectTimeout)

  return (
    <>
      <h1>There is no document at this url</h1>
      <span>Redirecting you in 5 seconds...</span>
    </>
  )
}
