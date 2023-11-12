import {
  type IUserContext,
  UserContext,
  UserDispatchContext
} from 'Components/context/userContext'
import { type PropsWithChildren, useState } from 'react'

export const UserContextProvider = ({
  children
}: PropsWithChildren): JSX.Element => {
  const [user, setUser] = useState<IUserContext | null>(null)

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}
