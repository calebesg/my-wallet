import { useTheme } from 'styled-components'
import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'
import { Container, Content } from './styles'

const List: React.FC = () => {
  const theme = useTheme()

  const options = [
    { value: 'Calebe', label: 'Calebe' },
    { value: 'Maria', label: 'Maria' },
    { value: 'Pedro', label: 'Pedro' },
  ]

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor={theme.colors.warning}>
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          tagColor={theme.colors.warning}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />

        <HistoryFinanceCard
          tagColor={theme.colors.info}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />

        <HistoryFinanceCard
          tagColor={theme.colors.info}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />

        <HistoryFinanceCard
          tagColor={theme.colors.warning}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />

        <HistoryFinanceCard
          tagColor={theme.colors.info}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />

        <HistoryFinanceCard
          tagColor={theme.colors.warning}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />

        <HistoryFinanceCard
          tagColor={theme.colors.warning}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />

        <HistoryFinanceCard
          tagColor={theme.colors.warning}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />

        <HistoryFinanceCard
          tagColor={theme.colors.info}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />
      </Content>
    </Container>
  )
}

export default List
