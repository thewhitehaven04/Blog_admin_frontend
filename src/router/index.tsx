import { AppLayout } from 'Components/Layout/AppLayout'
import { GenericErrorBoundary } from 'Components/ErrorBoundary'
import { LoginPage } from 'Pages/Login'
import { PostsPage } from 'Pages/Posts'
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
    path: '/',
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
            path: 'posts',
            element: <PostsPage />,
            loader: RouterLoaders.getPosts
          },
          {
            path: 'post/:id',
            loader: RouterLoaders.getPostById,
            element: <PostViewPage />,
            errorElement: <GetPostErrorPage />
          },
          {
            path: 'post/new',
            element: <PostCreateForm />
          },
          {
            path: 'post/:id/edit',
            element: <PostEditFormPage />,
            loader: RouterLoaders.getPostById
          }
        ]
      }
    ]
  }
])
