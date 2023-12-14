import appConfig from '@/appConfig'
import BaseApiClient from 'Client/base'
import {
  type IGetPostsRequestParamsDto,
  type IUpdatePostRequestDto,
  type ICreatePostRequestDto,
} from 'Client/posts/types'

export class PostsClient extends BaseApiClient {
  async getPosts(
    postsRequest: IGetPostsRequestParamsDto
  ): Promise<Response> {
    return await this.request('GET', 'posts', postsRequest)
  }

  async getPost(
    postId: string
  ): Promise<Response> {
    return await this.request('GET', `posts/${postId}`)
  }

  async updatePost(
    postId: string,
    postData: IUpdatePostRequestDto
  ): Promise<Response> {
    return await this.authorizedRequest(
      'PATCH',
      `posts/${postId}`,
      {},
      postData
    )
  }

  async deletePost(postId: string): Promise<Response> {
    return await this.authorizedRequest('DELETE', `posts/${postId}`)
  }

  async createPost(
    postData: ICreatePostRequestDto
  ): Promise<Response> {
    return await this.authorizedRequest(
      'POST',
      'posts',
      {},
      postData
    )
  }
}

const PostsClientInstance = new PostsClient(appConfig.apiRootUrl)
export { PostsClientInstance }
