import { HeaderBar } from 'Components/Layout/Header/styles'
import { UserData } from 'Components/Common/UserData'
import { useUserContext } from 'Hooks/useUserContext'
import { Row } from 'Components/Styles/Common'
import { ButtonLink } from 'Components/Common/ButtonLink'

export const Header = (): JSX.Element => {
  const user = useUserContext()

  return (
    <HeaderBar>
      {user != null ? (
        <Row $justify='between' $alignment='center'>
          <ButtonLink to='post/new'>New post</ButtonLink>
          <UserData username={user.username} email={user.email} />
        </Row>
      ) : (
        <ButtonLink to='login'>Login as administrator</ButtonLink>
      )}
    </HeaderBar>
  )
}
