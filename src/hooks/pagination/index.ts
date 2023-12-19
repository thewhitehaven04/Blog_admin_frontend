import { type IPaginationParams } from 'Hooks/pagination/types'
import { PostsQueryParamsSchema } from 'Pages/Posts/validation'
import { useSearchParams } from 'react-router-dom'

export function usePagination(): IPaginationParams {
  const [searchParams] = useSearchParams()

  return PostsQueryParamsSchema.validateSync(
    Object.fromEntries(searchParams.entries())
  )
}
