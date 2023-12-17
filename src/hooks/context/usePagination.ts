import { PaginationContext } from 'Context/pagination'
import { type IPaginationContext } from 'Context/pagination/types'
import { useContext } from 'react'

export function usePaginationContext(): IPaginationContext { 
  return useContext(PaginationContext)
}