import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'

import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'

import formateCurrency from '../../shared/formateCurrency'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

import { Container, Content, Filters } from './styles'

interface IData {
  description: string
  amountFormatted: string
  frequency: string
  dataFormatted: string
  tagColor: string
}

const defaultYear = new Date().getFullYear()
const defaultMonth = new Date().getMonth()

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([])
  const [selectedYear, setSelectedYear] = useState(defaultYear)
  const [selectedMonth, setSelectMonth] = useState(defaultMonth)

  const theme = useTheme()
  const params = useParams()

  const { type } = params

  const headerOptions = useMemo(() => {
    return type === 'entry-balance'
      ? { title: 'Entradas', lineColor: theme.colors.info }
      : { title: 'Saídas', lineColor: theme.colors.warning }
  }, [type, theme.colors])

  const getData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses
  }, [type])

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

  useEffect(() => {
    console.log(selectedMonth)
    const filteredData = getData
      .filter(item => {
        const data = new Date(item.date)

        return (
          data.getMonth() + 1 === selectedMonth &&
          data.getFullYear() === selectedYear
        )
      })
      .map(item => {
        const tagColor =
          item.frequency === 'recorrente'
            ? theme.colors.success
            : theme.colors.warning

        return {
          description: item.description,
          amountFormatted: formateCurrency(Number(item.amount)),
          frequency: item.frequency,
          dataFormatted: new Date(item.date).toLocaleDateString('pt-BR'),
          tagColor,
        }
      })

    setData(filteredData)
  }, [getData, selectedMonth, selectedYear])

  return (
    <Container>
      <ContentHeader
        title={headerOptions.title}
        lineColor={headerOptions.lineColor}
      >
        <SelectInput
          options={months}
          onChange={e => setSelectMonth(+e.target.value)}
          defaultValue={selectedMonth}
        />
        <SelectInput
          options={years}
          onChange={e => setSelectedYear(+e.target.value)}
          defaultValue={selectedYear}
        />
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
        {data.map((item, index) => (
          <HistoryFinanceCard
            key={index}
            tagColor={item.tagColor}
            amount={item.amountFormatted}
            title={item.description}
            subtitle={item.dataFormatted}
          />
        ))}
      </Content>
    </Container>
  )
}

export default List
