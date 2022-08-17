import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import Layout from './components/Layout'

import dark from './styles/theme/dark'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}

export default App
