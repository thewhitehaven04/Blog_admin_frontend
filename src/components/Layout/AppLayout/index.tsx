import { MainLayout } from 'Components/Layout/AppLayout/styles'
import { Header } from 'Components/Layout/Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = (): JSX.Element => (
  <>
    <Header />
    <MainLayout>
      <Outlet />
    </MainLayout>
  </>
)
