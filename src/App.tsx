import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}
