import { HeaderBar } from 'Components/Layout/Header/styles'
import { UserData } from 'Components/Common/UserData'
import { useUserContext } from 'Hooks/context/useUserContext'
import { Row } from 'Components/Common/Row/styles'
import { ButtonLink } from 'Components/Common/ButtonLink/styles'

export const Header = (): JSX.Element => {
  const user = useUserContext()

  return (
    <HeaderBar>
      {user != null ? (
        <Row $justify='between' $alignment='center'>
          <Row $alignment='start'>
            <ButtonLink to='posts?count=5&offset=0'>Review posts</ButtonLink>
            <ButtonLink to='post/new'>New post</ButtonLink>
          </Row>
          <UserData username={user.username} email={user.email} />
        </Row>
      ) : (
        <ButtonLink to='login'>Login as administrator</ButtonLink>
      )}
    </HeaderBar>
  )
}
