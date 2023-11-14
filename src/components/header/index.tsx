import { ROUTES_LIST } from 'Components/router/routes'
import { UserData } from 'Components/userData'
import { useUserContext } from 'Hooks/useUserContext'
import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  const user = useUserContext()

  return (
    <header>
      {user != null ? (
        <UserData username={user.username} email={user.email} />
      ) : (
        <Link to={ROUTES_LIST.login}>
          <button type='button'>Login</button>
        </Link>
      )}
    </header>
  )
}
