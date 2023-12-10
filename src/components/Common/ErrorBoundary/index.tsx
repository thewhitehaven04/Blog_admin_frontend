import {
  type IGenericRouteError,
} from 'Components/Common/ErrorBoundary/types'
import { useRouteError } from 'react-router-dom'

// placeholder
export const GenericErrorBoundary = (): JSX.Element => {
  const error = useRouteError() as IGenericRouteError
  return (
    <>
      <h1>{error.title}</h1>
      <p>{error.description}</p>
    </>
  )
}
