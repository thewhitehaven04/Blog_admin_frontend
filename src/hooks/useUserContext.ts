import { type IUserContext, UserContext } from 'Components/context/userContext';
import { useContext } from 'react';

export function useUserContext(): IUserContext | null {
  return useContext(UserContext) 
}