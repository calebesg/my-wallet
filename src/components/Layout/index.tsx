import { ReactElement } from 'react'
import Aside from '../Aside'
import Content from '../Content'
import Header from '../Header'
import { Container } from './styles'

interface LayoutProps {
  children: ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Aside />
      <Content>{children}</Content>
    </Container>
  )
}

export default Layout
