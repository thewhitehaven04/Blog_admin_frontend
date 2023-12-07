import appConfig from '@/appConfig'
import { useNavigate, useParams } from 'react-router-dom'

export const GetPostErrorPage = (): JSX.Element => {
  const { id } = useParams<'id'>()
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/posts')
  }, appConfig.redirectTimeout)

  return (
    <>
      <h1>Unable to retrieve the post {id}</h1>
      <span>Redirecting you to the post list page in a few moments... </span>
    </>
  )
}
