import { CardWrapper } from 'Components/cardWrapper'
import { Column } from 'Components/userData/styles'
import { type IUserDataProps } from 'Components/userData/types'

export const UserData = (props: IUserDataProps): JSX.Element => (
  <CardWrapper>
    <Column>
      <span>{props.username}</span>
      <span>{props.email}</span>
    </Column>
  </CardWrapper>
)
