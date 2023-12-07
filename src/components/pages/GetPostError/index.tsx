import appConfig from '@/appConfig'
import { Column } from 'Components/Styles/Common'
import { useNavigate, useParams, useRouteError } from 'react-router-dom'

export const GetPostErrorPage = (): JSX.Element => {
  const { id } = useParams<'id'>()
  const navigate = useNavigate()
  const errors = useRouteError() as Error

  setTimeout(() => {
    navigate('/posts')
  }, appConfig.redirectTimeout)

  return (
    <>
      <h1>Unable to retrieve the post {id}</h1>
      <Column>
        <span>Error information: {errors.message}</span>
        <span>Redirecting you to the post list page in a few moments... </span>
      </Column>
    </>
  )
}
