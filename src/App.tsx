import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import Layout from './components/Layout'

import dark from './styles/theme/dark'
import List from './pages/List'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  )
}

export default App
