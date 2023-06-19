import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { HomePage } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomePage />
      <GlobalStyle />
    </ThemeProvider>
  )
}
