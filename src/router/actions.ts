import appConfig from '@/appConfig'
import { PostsClient } from 'Client/posts'
import { redirect, type Params } from 'react-router-dom'

const PostsClientInstance = new PostsClient(appConfig.apiRootUrl)

export const updatePost = async ({
  params,
  request
}: {
  params: Params<'id'>
  request: Request
}): Promise<Response> => {
  const formData = await request.formData()
  const json: Record<string, string> = {}
  formData.forEach((value, key) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    json[key] = value.toString()
  })

  if (params.id != null) {
    const res = await PostsClientInstance.updatePost(params.id, json)
    if (res.success) {
      return redirect(`/post/${params.id}`)
    }
    throw new Error(res.errors[0])
  }
  throw new Error('Post ID is undefined')
}

export const deletePost = async ({
  params
}: {
  params: Params<'id'>
}): Promise<Response> => {
  if (params.id != null) {
    await PostsClientInstance.deletePost(params.id)
    return redirect('/posts')
  }

  throw new Error('Post ID is undefined')
}
