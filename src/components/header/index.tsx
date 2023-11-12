import { useUserContext } from '@/hooks/useUserContext'
import { UserData } from 'Components/userData'

export const Header = (): JSX.Element => {
  const user = useUserContext()

  return (
    <header>
      {user != null ? (
        <UserData username={user.username} email={user.email} />
      ) : (
        <button type='button'>Login</button>
      )}
    </header>
  )
}
