import { ThemeProvider } from 'styled-components'

import dark from './styles/theme/dark'
import GlobalStyles from './styles/global'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
