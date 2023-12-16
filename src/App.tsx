import React from 'react'
import { createRoot } from 'react-dom/client'
import { UserContextProvider } from 'Context/userContext/provider'
import { ThemeProvider } from 'styled-components'
import { AppTheme } from 'Components/Common/theme'
import { GlobalStyle } from '@/style'
import '@fontsource/lato'
import { AppRouter } from 'Router/index'

const App = (): JSX.Element => {
  return (
    <UserContextProvider>
      <ThemeProvider theme={AppTheme}>
        <AppRouter />
      </ThemeProvider>
    </UserContextProvider>
  )
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
