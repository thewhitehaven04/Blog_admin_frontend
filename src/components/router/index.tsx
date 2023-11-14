import appConfig from '@/appConfig'
import PostsClient from 'Client/posts'
import { AppLayout } from 'Components/appLayout'
import { GenericErrorBoundary } from 'Components/errorBoundary'
import { ROUTES_LIST } from 'Components/router/routes'
import { LoginPage } from 'Pages/login'
import { PostsPage } from 'Pages/posts'
import { createBrowserRouter, json } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: ROUTES_LIST.root,
    element: <AppLayout />,
    errorElement: <GenericErrorBoundary/>,
    children: [
      {
        path: ROUTES_LIST.login,
        element: <LoginPage />
      },
      {
        index: true,
        element: <PostsPage />,
        loader: async ({ request }) => {
          const url = new URLSearchParams(request.url)
          const offset = Number.parseInt(url.get('offset') ?? '0')
          const count = Number.parseInt(url.get('count') ?? '0')
          const posts = await new PostsClient(appConfig.apiRootUrl).getPosts({
            offset,
            count
          })

          if (posts.success) {
            return posts.data
          }
        }
      }
    ]
  }
])

export default router
