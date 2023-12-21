import { Column } from '../Column/styles'
import { type IUserDataProps } from 'Components/Common/UserData/types'
import * as SC from 'Components/Common/UserData/styles'

export const UserData = (props: IUserDataProps): JSX.Element => (
  <Column $alignment='end'>
    <SC.Username>{props.username}</SC.Username>
    <SC.Email>{props.email}</SC.Email>
  </Column>
)
