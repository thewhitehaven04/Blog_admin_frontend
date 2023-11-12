import BaseApiClient from 'Client/base'
import { type TGenericResponse } from 'Client/base/types'
import {
  type IPostResponseDto,
  type IGetPostsRequestParamsDto
} from 'Client/posts/types'

export default class PostsClient extends BaseApiClient {
  async getPosts(
    postsRequest: IGetPostsRequestParamsDto
  ): Promise<TGenericResponse<IPostResponseDto[]>> {
    return await (await this.request('GET', 'posts', postsRequest)).json()
  }
}
