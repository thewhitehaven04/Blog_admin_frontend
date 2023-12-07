import { AppLayout } from 'Components/Layout/AppLayout'
import { GenericErrorBoundary } from 'Components/ErrorBoundary'
import { LoginPage } from 'Pages/Login'
import { PostsPage } from 'Pages/Posts'
import { ROUTES_LIST } from 'Router/routes'
import * as RouterLoaders from 'Router/loaders'
import { createBrowserRouter } from 'react-router-dom'
import { PostEditFormPage } from 'Pages/PostEdit'
import { PostViewPage } from 'Pages/PostView'
import { PostCreateForm } from 'Pages/PostCreate'
import { Private } from 'Components/Private'
import { GetPostErrorPage } from 'Pages/GetPostError'

// TODO: error handling
export default createBrowserRouter([
  {
    path: ROUTES_LIST.root,
    element: <AppLayout />,
    errorElement: <GenericErrorBoundary />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: '*',
        element: <Private />,
        children: [
          {
            path: ROUTES_LIST.posts,
            element: <PostsPage />,
            loader: RouterLoaders.getPosts
          },
          {
            path: ROUTES_LIST.viewPost,
            loader: RouterLoaders.getPostById,
            element: <PostViewPage />,
            errorElement: <GetPostErrorPage />
          },
          {
            path: ROUTES_LIST.createPost,
            element: <PostCreateForm />
          },
          {
            path: ROUTES_LIST.editPostSubmit,
            element: <PostEditFormPage />,
            loader: RouterLoaders.getPostById
          }
        ]
      }
    ]
  }
])
