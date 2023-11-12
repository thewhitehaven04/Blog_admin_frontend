import { type IUserDataProps } from 'Components/userData/types'

export const UserData = (props: IUserDataProps): JSX.Element => (
  <div>
    <span>{props.username}</span>
    <span>{props.email}</span>
  </div>
)
