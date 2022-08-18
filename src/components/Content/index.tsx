import { ReactElement } from 'react'
import { Container } from './styles'

interface ContentProps {
  children: ReactElement
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Content
