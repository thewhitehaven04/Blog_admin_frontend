import appConfig from '@/appConfig'
import { PostsClient } from 'Client/posts'
import { type IPostResponseDto } from 'Client/posts/types'
import { type Params } from 'react-router-dom'

const PostsClientInstance = new PostsClient(appConfig.apiRootUrl)

export const getPosts = async ({
  request
}: {
  request: Request
}): Promise<IPostResponseDto[] | undefined> => {
  const searchParams = new URLSearchParams(request.url)
  const offset = parseInt(searchParams.get('offest') ?? '0')
  const count = parseInt(searchParams.get('count') ?? '10')

  const posts = await PostsClientInstance.getPosts({ offset, count })

  if (posts.success) {
    return posts.data
  }

  throw new Error('Error when parsing params')
}
export const getPostById = async ({
  params
}: {
  params: Params<'id'>
}): Promise<IPostResponseDto | undefined> => {
  if (params.id != null) {
    const post = await PostsClientInstance.getPost(params.id)
    if (post.success) {
      return post.data
    }
    throw new Error('Error upon retrieving the post. Please, try again')
  }
}
