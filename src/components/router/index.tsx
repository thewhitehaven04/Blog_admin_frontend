import appConfig from '@/appConfig'
import PostsClient from 'Client/posts'
import { AppLayout } from 'Components/appLayout'
import { LoginPage } from 'Pages/login'
import { PostsPage } from 'Pages/posts'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/authenticate',
        element: <LoginPage />
      },
      {
        path: '/posts',
        element: <PostsPage/>,
        loader: async ({request}) => {
          return await new PostsClient(appConfig.apiRootUrl).getPosts({''})
        }
      }
    ]
  }
])

export default router
