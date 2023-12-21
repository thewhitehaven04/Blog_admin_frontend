import appConfig from '@/appConfig'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const RedirectPage = (): JSX.Element => {
  const navigate = useNavigate()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/')
    }, appConfig.redirectTimeout)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [navigate])

  return (
    <>
      <h1>There is no document at this url</h1>
      <span>Redirecting you in 5 seconds...</span>
    </>
  )
}
