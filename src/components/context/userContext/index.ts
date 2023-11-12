import { type Dispatch, createContext } from 'react'

interface IUserContext {
  username: string
  email: string
}

const UserContext = createContext<IUserContext | null>(null)

const UserDispatchContext = createContext<Dispatch<IUserContext> | undefined>(
  undefined
)

export { UserContext, UserDispatchContext, type IUserContext }
