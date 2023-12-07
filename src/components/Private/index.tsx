import { useUserContext } from 'Hooks/useUserContext'
import { RedirectPage } from 'Pages/Redirect'
import { Outlet } from 'react-router-dom'

export const Private = (): JSX.Element => {
  const user = useUserContext()

  if (user != null) {
    return <Outlet />
  }

  return <RedirectPage />
}
