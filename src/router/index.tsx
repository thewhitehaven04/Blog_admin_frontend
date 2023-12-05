import { AppLayout } from 'Components/Layout/AppLayout'
import { GenericErrorBoundary } from 'Components/ErrorBoundary'
import { LoginPage } from 'Pages/Login'
import { PostsPage } from 'Pages/Posts'
import { ROUTES_LIST } from 'Router/routes'
import * as RouterLoaders from 'Router/loaders'
import * as RouterActions from 'Router/actions'
import { createBrowserRouter } from 'react-router-dom'
import { PostEditFormPage } from 'Pages/PostEdit'
import { PostViewPage } from 'Pages/PostView'
import { PostCreateForm } from 'Pages/PostCreate'

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
        index: true,
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
        element: <PostViewPage />
      },
      {
        path: ROUTES_LIST.createPost,
        element: <PostCreateForm />,
      },
      {
        path: ROUTES_LIST.editPostSubmit,
        element: <PostEditFormPage />,
        loader: RouterLoaders.getPostById,
      }
    ]
  }
])
