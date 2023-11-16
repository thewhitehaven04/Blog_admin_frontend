import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from 'Components/router'
import { UserContextProvider } from 'Components/context/userContext/provider'
import { ThemeProvider } from 'styled-components'
import { theme } from 'Components/styles/theme'
import { GlobalStyle } from '@/style'

const App = (): JSX.Element => {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserContextProvider>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
)
