import appConfig from '@/appConfig'
import BaseApiClient from 'Client/base'
import { type TResponseError } from 'Client/base/types'
import {
  type IPostResponseDto,
  type IGetPostsRequestParamsDto,
  type IUpdatePostRequestDto,
  type ICreatePostRequestDto,
  type IFormattedPostDto
} from 'Client/posts/types'

export class PostsClient extends BaseApiClient {
  async getPosts(
    postsRequest: IGetPostsRequestParamsDto
  ): Promise<[TResponseError, null] | [null, IPostResponseDto[]]> {
    return await this.request<IPostResponseDto[]>('GET', 'posts', postsRequest)
  }

  async getPost(
    postId: string
  ): Promise<[TResponseError, null] | [null, IPostResponseDto]> {
    return await this.request<IPostResponseDto>('GET', `posts/${postId}`)
  }

  async updatePost(
    postId: string,
    postData: IUpdatePostRequestDto
  ): Promise<[TResponseError | null, null]> {
    return await this.authorizedRequest<null>(
      'PATCH',
      `posts/${postId}`,
      {},
      postData
    )
  }

  async deletePost(postId: string): Promise<[TResponseError | null, null]> {
    return await this.authorizedRequest<null>('DELETE', `posts/${postId}`)
  }

  async createPost(
    postData: ICreatePostRequestDto
  ): Promise<[TResponseError | null, IFormattedPostDto | null]> {
    return await this.authorizedRequest<IFormattedPostDto>(
      'POST',
      'posts',
      {},
      postData
    )
  }
}

const PostsClientInstance = new PostsClient(appConfig.apiRootUrl)
export { PostsClientInstance }
