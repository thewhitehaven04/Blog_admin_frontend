import { type IUserContext, UserContext } from 'Context/userContext';
import { useContext } from 'react';

export function useUserContext(): IUserContext | null {
  return useContext(UserContext) 
}