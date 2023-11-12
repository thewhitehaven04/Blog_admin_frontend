import { Outlet } from 'react-router-dom'

export const AppLayout: React.FC<any> = () => <>
  <header />
  <main>
    <Outlet />
  </main>
</>
