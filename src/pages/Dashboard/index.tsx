import { useTheme } from 'styled-components'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import useDateFilter from '../useDateFilter'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  const {
    months,
    selectedMonth,
    selectedYear,
    setSelectMonth,
    setSelectedYear,
    years,
  } = useDateFilter([...gains, ...expenses])

  const theme = useTheme()

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor={theme.colors.success}>
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
    </Container>
  )
}

export default Dashboard
