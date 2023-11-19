import appConfig from '@/appConfig'
import { PostsClient } from 'Client/posts'
import { AppLayout } from 'Components/appLayout'
import { GenericErrorBoundary } from 'Components/errorBoundary'
import { ROUTES_LIST } from 'Components/router/routes'
import { LoginPage } from 'Pages/login'
import { PostEditPage } from 'Pages/postEdit'
import { PostsPage } from 'Pages/posts'
import { url } from 'inspector'
import { type Params, createBrowserRouter, redirect } from 'react-router-dom'

const PostsClientInstance = new PostsClient(appConfig.apiRootUrl)

const router = createBrowserRouter([
  {
    path: ROUTES_LIST.root,
    element: <AppLayout />,
    errorElement: <GenericErrorBoundary />,
    children: [
      {
        path: ROUTES_LIST.login,
        element: <LoginPage />
      },
      {
        path: 'index',
        element: <LoginPage />
      },
      {
        path: ROUTES_LIST.posts,
        element: <PostsPage />,
        loader: async ({ request }) => {
          const searchParams = new URLSearchParams(request.url)
          const offset = searchParams.get('offest')
          const count = searchParams.get('count')

          const posts = await PostsClientInstance.getPosts({
            offset: offset != null ? parseInt(offset) : 0,
            count: count != null ? parseInt(count) : 10
          })

          if (posts.success) {
            return posts.data
          }
        }
      },
      {
        path: ROUTES_LIST.editPost,
        loader: async ({ params }: { params: Params<'id'> }) => {
          if (params.id != null) {
            const post = await PostsClientInstance.getPost(params.id)
            if (post.success) {
              return post.data
            }
            throw new Error('Error upon retrieving the post. Please, try again')
          }
        },
        element: <PostEditPage />
      },
      {
        path: ROUTES_LIST.editPostSubmit,
        element: <PostEditPage />,
        action: async ({
          params,
          request
        }: {
          params: Params<'id'>
          request: Request
        }) => {
          const formData = await request.formData()
          const json: Record<string, string> = {}
          formData.forEach((value, key) => {
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            json[key] = value.toString()
          })

          if (params.id != null) {
            await PostsClientInstance.updatePost(params.id, json)
            return redirect(`/post/${params.id}`)
          }
          throw new Error('Post ID is undefined')
        }
      }
    ]
  }
])

export default router
