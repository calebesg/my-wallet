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

import { Container, Content, Filters } from './styles'
import useDateFilter from '../useDateFilter'

interface IData {
  description: string
  amountFormatted: string
  frequency: string
  dateFormatted: string
  tagColor: string
}

const frequency = {
  RECURRENT: 'recorrente',
  EVENTUAL: 'eventual',
}

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([])
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
    frequency.RECURRENT,
    frequency.EVENTUAL,
  ])

  const params = useParams()

  const { type: movementType } = params

  const {
    months,
    selectedMonth,
    selectedYear,
    setSelectMonth,
    setSelectedYear,
    years,
  } = useDateFilter(movementType === 'entry-balance' ? gains : expenses)

  const theme = useTheme()

  const pageData = useMemo(() => {
    if (movementType === 'entry-balance') {
      return {
        title: 'Entradas',
        lineColor: theme.colors.info,
        movements: gains,
      }
    }

    return {
      title: 'Saídas',
      lineColor: theme.colors.warning,
      movements: expenses,
    }
  }, [movementType, theme.colors.warning, theme.colors.info])

  useEffect(() => {
    const filteredData = pageData.movements
      .filter(item => {
        const date = new Date(item.date)

        return (
          date.getMonth() === selectedMonth &&
          date.getFullYear() === selectedYear &&
          frequencyFilterSelected.includes(item.frequency)
        )
      })
      .map(item => {
        const tagColor =
          item.frequency === frequency.RECURRENT
            ? theme.colors.success
            : theme.colors.warning

        return {
          description: item.description,
          amountFormatted: formateCurrency(Number(item.amount)),
          frequency: item.frequency,
          dateFormatted: new Date(item.date).toLocaleDateString('pt-BR'),
          tagColor,
        }
      })

    setData(filteredData)
  }, [
    pageData,
    selectedMonth,
    selectedYear,
    frequencyFilterSelected,
    theme.colors.success,
    theme.colors.warning,
  ])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(
      item => item === frequency
    )

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(
        item => item !== frequency
      )
      return setFrequencyFilterSelected(filtered)
    }

    setFrequencyFilterSelected(prevState => [...prevState, frequency])
  }

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
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
        <button
          type="button"
          className={`
            tag__filter tag__filter--recurrent
            ${
              frequencyFilterSelected.includes(frequency.RECURRENT) &&
              'tag-activated'
            }
          `}
          onClick={() => handleFrequencyClick(frequency.RECURRENT)}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`
            tag__filter tag__filter--eventual
            ${
              frequencyFilterSelected.includes(frequency.EVENTUAL) &&
              'tag-activated'
            }
          `}
          onClick={() => handleFrequencyClick(frequency.EVENTUAL)}
        >
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
            subtitle={item.dateFormatted}
          />
        ))}
      </Content>
    </Container>
  )
}

export default List
