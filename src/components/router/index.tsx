import appConfig from '@/appConfig'
import AuthClient from 'Client/auth'
import { LoginPage } from 'Pages/login'
import { createBrowserRouter } from 'react-router-dom'

const Placeholder = () => <span>Placeholder</span>
const router = createBrowserRouter([
  {
    path: '/',
    element: <Placeholder />
  },
  {
    path: '/authenticate',
    element: <LoginPage />
  },
  {
    path: '/authenticate/login',
    element: <Placeholder />,
    action: async ({ request }) => {
      return new AuthClient(appConfig.apiRootUrl).auth(await request.formData())
    }
  }
])

export default router
