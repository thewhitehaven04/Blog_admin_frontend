import BaseApiClient from 'Client/base'
import { type TGenericResponse } from 'Client/base/types'
import {
  type IPostResponseDto,
  type IGetPostsRequestParamsDto,
  type IUpdatePostRequestDto
} from 'Client/posts/types'

export class PostsClient extends BaseApiClient {
  async getPosts(
    postsRequest: IGetPostsRequestParamsDto
  ): Promise<TGenericResponse<IPostResponseDto[]>> {
    return await (await this.request('GET', 'posts', postsRequest)).json()
  }

  async getPost(postId: string): Promise<TGenericResponse<IPostResponseDto>> {
    return await (await this.request('GET', `posts/${postId}`)).json()
  }

  async updatePost(
    postId: string,
    postData: IUpdatePostRequestDto
  ): Promise<TGenericResponse> {
    return await (
      await this.authorizedRequest('PATCH', `posts/${postId}`, { data: postData })
    ).json()
  }
}
