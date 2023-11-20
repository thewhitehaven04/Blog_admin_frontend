import { CardWrapper } from 'Components/cardWrapper'
import { Column } from 'Components/styles/generic'
import { type IUserDataProps } from 'Components/userData/types'

// placeholder
export const UserData = (props: IUserDataProps): JSX.Element => (
  <Column $alignment='end'>
    <CardWrapper>
      <div>{props.username}</div>
      <div>{props.email}</div>
    </CardWrapper>
  </Column>
)
