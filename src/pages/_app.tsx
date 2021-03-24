import React from 'react'
import GlobalStyles from '../styles/global'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../styles/lightTheme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
