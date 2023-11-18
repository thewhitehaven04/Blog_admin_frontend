import {
  type IUserContext,
  UserContext,
  UserDispatchContext
} from 'Components/context/userContext'
import { getAccessToken } from 'Service/accessToken'
import { type Payload, jwtDecode } from 'jwt-decode'
import { type PropsWithChildren, useState, useEffect } from 'react'

export const UserContextProvider = ({
  children
}: PropsWithChildren): JSX.Element => {
  const [user, setUser] = useState<IUserContext | null>(null)

  useEffect(() => {
    const token = getAccessToken()
    if (token != null) {
      setUser(jwtDecode<Payload>(token))
    }
  }, [])

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}
