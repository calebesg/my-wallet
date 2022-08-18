import { Container, TitleContainer, Filters } from './styles'

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Dashboard</h1>
      </TitleContainer>

      <Filters>
        <button type="button">Botão A</button>
        <button type="button">Botão B</button>
      </Filters>
    </Container>
  )
}

export default ContentHeader
