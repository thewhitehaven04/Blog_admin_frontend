import { LoginPage } from '@/pages/login'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/authenticate',
        element: <LoginPage />
      }
    ]
  }
])

export default router
