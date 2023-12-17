import { type IPaginationContext } from 'Context/pagination/types';
import { createContext } from 'react';

export const PaginationContext = createContext<IPaginationContext>({
  count: 5,
  offset: 0
})
