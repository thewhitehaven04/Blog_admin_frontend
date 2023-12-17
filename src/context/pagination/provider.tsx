import { PaginationContext } from 'Context/pagination'
import { PostsQueryParamsSchema } from 'Pages/Posts/validation'
import { type FC } from 'react'
import { useSearchParams } from 'react-router-dom'

export const PostsPaginationContextProvider: FC<any> = ({ children }) => {
  const searchParams = useSearchParams()

  const paginationParams = PostsQueryParamsSchema.validateSync(
    Object.fromEntries(searchParams.entries())
  )

  return (
    <PaginationContext.Provider value={paginationParams}>
      {children}
    </PaginationContext.Provider>
  )
}
