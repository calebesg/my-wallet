import { Container, TitleContainer, Controllers } from './styles'

interface IContentHeader {
  title: string
  children: React.ReactNode
  lineColor: string
}

const ContentHeader: React.FC<IContentHeader> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>

      <Controllers>{children}</Controllers>
    </Container>
  )
}

export default ContentHeader
