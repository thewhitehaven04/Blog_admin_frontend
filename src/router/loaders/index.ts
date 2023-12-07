import appConfig from '@/appConfig'
import { PostsClient } from 'Client/posts'
import { type IPostResponseDto } from 'Client/posts/types'
import { PostsQueryParamsSchema } from 'Router/loaders/validation'
import { type Params } from 'react-router-dom'

const PostsClientInstance = new PostsClient(appConfig.apiRootUrl)

export const getPosts = async ({
  request
}: {
  request: Request
}): Promise<IPostResponseDto[]> => {
  const search = new URL(request.url).search
  const searchParams = Object.fromEntries(new URLSearchParams(search).entries())
  const parsedParams = await PostsQueryParamsSchema.validate(searchParams)

  const [errors, data] = await PostsClientInstance.getPosts(parsedParams)
  if (errors == null) {
    return data
  }

  throw new Error('Unable to retrieve blog posts')
}
export const getPostById = async ({
  params
}: {
  params: Params<'id'>
}): Promise<IPostResponseDto | undefined> => {
  if (params.id != null) {
    const [errors, data] = await PostsClientInstance.getPost(params.id)

    if (errors == null) {
      return data
    }

    throw new Error(
      `Error upon retrieving the post. Please, try again. Errors: ${JSON.stringify(
        errors
      )}`
    )
  }
}
