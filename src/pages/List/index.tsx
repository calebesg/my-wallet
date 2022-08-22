import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'

import formateCurrency from '../../shared/formateCurrency'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import listOfMonths from '../../shared/months'

import { Container, Content, Filters } from './styles'

interface IData {
  description: string
  amountFormatted: string
  frequency: string
  dataFormatted: string
  tagColor: string
}

const defaultYear = 2020
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

  const months = useMemo(() => {
    return listOfMonths.map((item, index) => ({
      label: item,
      value: index,
    }))
  }, [])

  const years = useMemo(() => {
    const result = [
      ...new Set(
        getData.map(item => {
          return new Date(item.date).getFullYear()
        })
      ),
    ]

    return result.map(item => ({ label: item, value: item }))
  }, [getData])

  useEffect(() => {
    console.log(selectedMonth, selectedYear)
    const filteredData = getData
      .filter(item => {
        const date = new Date(item.date)

        return (
          date.getMonth() === selectedMonth &&
          date.getFullYear() === selectedYear
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
          defaultValue={defaultYear}
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
        {data.map(item => (
          <HistoryFinanceCard
            key={uuidv4()}
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
