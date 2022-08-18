import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/global'
import Layout from './components/Layout'

import dark from './styles/theme/dark'
import ContentHeader from './components/ContentHeader'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <ContentHeader />
      </Layout>
    </ThemeProvider>
  )
}

export default App
