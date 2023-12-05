import { CardWrapper } from 'Components/Common/CardWrapper'
import { Column } from 'Components/Styles/Common'
import { type IUserDataProps } from 'Components/UserData/types'

// placeholder
export const UserData = (props: IUserDataProps): JSX.Element => (
  <Column $alignment='end'>
    <CardWrapper>
      <div>{props.username}</div>
      <div>{props.email}</div>
    </CardWrapper>
  </Column>
)
