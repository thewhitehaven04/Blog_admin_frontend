import { CardWrapper } from 'Components/Common/CardWrapper/styles'
import { Column } from '../Column/styles'
import { type IUserDataProps } from 'Components/Common/UserData/types'

export const UserData = (props: IUserDataProps): JSX.Element => (
  <Column $alignment='end'>
    <CardWrapper>
      <div>{props.username}</div>
      <div>{props.email}</div>
    </CardWrapper>
  </Column>
)
