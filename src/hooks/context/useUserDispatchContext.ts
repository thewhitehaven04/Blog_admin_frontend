import {
  type IUserContext,
  UserDispatchContext
} from 'Context/userContext'
import { type Dispatch, useContext } from 'react'

export function useUserDispatchContext(): Dispatch<IUserContext> {
  const context = useContext(UserDispatchContext)

  if (context === undefined) {
    throw new Error("Dispatch context mustn't be undefined")
  }

  return context
}
