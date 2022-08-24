import { useTheme } from 'styled-components'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/WalletBox'
import MessageBox from '../../components/MessageBox'

import useDateFilter from '../useDateFilter'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'

import { Container, Content } from './styles'

const Dashboard: React.FC = () => {
  const {
    months,
    years,
    selectedMonth,
    selectedYear,
    setSelectMonth,
    setSelectedYear,
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

      <Content>
        <WalletBox
          title="Saldo"
          amount={150.0}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dollar"
          bgColor={theme.colors.success}
        />

        <WalletBox
          title="Entradas"
          amount={5000.0}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          bgColor={theme.colors.info}
        />

        <WalletBox
          title="Saídas"
          amount={4850.0}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          bgColor={theme.colors.warning}
        />

        <MessageBox
          title="Muito Bem!"
          description="Sua carteira está positiva!"
          footerText="Continue assim. Considere investir o seu saldo"
          icon={happyImg}
        />

        <MessageBox
          title="Muito Bem!"
          description="Sua carteira está positiva!"
          footerText="Continue assim. Considere investir o seu saldo"
          icon={sadImg}
        />
      </Content>
    </Container>
  )
}

export default Dashboard
