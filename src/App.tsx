import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import Layout from './components/Layout'

import dark from './styles/theme/dark'
import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  )
}

export default App
