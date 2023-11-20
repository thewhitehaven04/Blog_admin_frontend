import { CardWrapper } from 'Components/cardWrapper'
import { Column } from 'Components/styles/generic'
import { type IUserDataProps } from 'Components/userData/types'

// placeholder
export const UserData = (props: IUserDataProps): JSX.Element => (
  <CardWrapper>
    <Column>
      <span>{props.username}</span>
      <span>{props.email}</span>
    </Column>
  </CardWrapper>
)
