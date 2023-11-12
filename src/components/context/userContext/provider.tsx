import {
  type IUserContext,
  UserContext,
  UserDispatchContext
} from 'Components/context/userContext'
import { useState } from 'react'

export const UserContextProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<IUserContext | null>(null)

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}
