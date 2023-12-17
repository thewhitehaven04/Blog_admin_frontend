import { type IUserContext } from 'Context/userContext/types'
import { type Dispatch, createContext } from 'react'


const UserContext = createContext<IUserContext | null>(null)

const UserDispatchContext = createContext<Dispatch<IUserContext> | undefined>(
  undefined
)

export { UserContext, UserDispatchContext, type IUserContext }