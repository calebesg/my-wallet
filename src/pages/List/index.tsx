import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'

import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'
import { Container, Content, Filters } from './styles'

const List: React.FC = () => {
  const theme = useTheme()
  const params = useParams()

  const { type } = params

  const headerOptions = useMemo(() => {
    return type === 'entry-balance'
      ? { title: 'Entradas', lineColor: theme.colors.info }
      : { title: 'Saídas', lineColor: theme.colors.warning }
  }, [type, theme.colors])

  const months = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Maio' },
  ]

  const years = [
    { value: 2022, label: 2022 },
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ]

  return (
    <Container>
      <ContentHeader
        title={headerOptions.title}
        lineColor={headerOptions.lineColor}
      >
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag__filter tag__filter--recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag__filter tag__filter--eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
          tagColor={theme.colors.warning}
          amount="R$ 230,00"
          title="Conta de Luz"
          subtitle="19/08/2022"
        />
      </Content>
    </Container>
  )
}

export default List
