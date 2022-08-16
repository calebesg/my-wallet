import Aside from '../Aside'
import Content from '../Content'
import Header from '../Header'
import { Container } from './styles'

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Aside />
      <Content />
    </Container>
  )
}

export default Layout
