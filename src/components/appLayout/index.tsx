import { MainLayout } from 'Components/appLayout/styles'
import { Header } from 'Components/header'
import { Outlet } from 'react-router-dom'

export const AppLayout = (): JSX.Element => (
  <>
    <Header />
    <MainLayout>
      <Outlet />
    </MainLayout>
  </>
)
