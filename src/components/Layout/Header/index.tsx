import { HeaderBar } from 'Components/Layout/Header/styles'
import { ROUTES_LIST } from '@/router/routes'
import { UserData } from 'Components/UserData'
import { useUserContext } from 'Hooks/useUserContext'
import { Link } from 'react-router-dom'
import { Button } from 'Components/Common/Button/styles'
import { Row } from 'Components/Styles/Common'

export const Header = (): JSX.Element => {
  const user = useUserContext()

  return (
    <HeaderBar>
      {user != null ? (
        <Row $justify='between' $alignment='center'>
          <Link to='post/new'>
            <Button type='button'>New post</Button>
          </Link>
          <UserData username={user.username} email={user.email} />
        </Row>
      ) : (
        <Link to='login'>
          <Button type='button'>Login as administrator</Button>
        </Link>
      )}
    </HeaderBar>
  )
}
