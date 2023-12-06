import { number, object } from 'yup'

export const PostsQueryParamsSchema = object({
  offset: number().default(0),
  count: number().default(10)
})
