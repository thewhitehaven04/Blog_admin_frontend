import { AppLayout } from 'Components/appLayout'
import { GenericErrorBoundary } from 'Components/errorBoundary'
import { LoginPage } from 'Pages/login'
import { PostsPage } from 'Pages/posts'
import { ROUTES_LIST } from 'Router/routes'
import * as RouterLoaders from 'Router/loaders'
import * as RouterActions from 'Router/actions'
import { createBrowserRouter } from 'react-router-dom'
import { PostPage } from 'Pages/post'
import { PostEditForm } from 'Components/postEditFormCard'
import { PostView } from 'Components/postViewCard'

// TODO: protected routes
// TODO: error handling
export default createBrowserRouter([
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
        loader: RouterLoaders.getPosts
      },
      {
        path: ROUTES_LIST.viewPost,
        loader: RouterLoaders.getPostById,
        shouldRevalidate: () => true,
        element: <PostPage />,
        children: [
          {
            index: true,
            element: <PostView />,
          },
          {
            path: 'edit',
            element: <PostEditForm />,
            action: RouterActions.updatePost
          }
        ]
      }
    ]
  }
])
