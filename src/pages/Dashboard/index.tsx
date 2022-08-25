import { useTheme } from 'styled-components'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/WalletBox'
import MessageBox from '../../components/MessageBox'

import useDateFilter from '../useDateFilter'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import calcTotalValue from '../../shared/calcTotalValue'

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

import { Container, Content } from './styles'
import { useMemo } from 'react'
import PieChartBox from '../../components/PieChartBox'

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

  const totalExpenses = useMemo(() => {
    return calcTotalValue(expenses, selectedMonth, selectedYear)
  }, [selectedMonth, selectedYear])

  const totalGains = useMemo(() => {
    return calcTotalValue(gains, selectedMonth, selectedYear)
  }, [selectedMonth, selectedYear])

  const balance = useMemo(
    () => totalGains - totalExpenses,
    [totalExpenses, totalGains]
  )

  const resumeMonth = useMemo(() => {
    if (balance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês você gastou mais do que deveria.',
        footerText:
          'Verifique seus gastos e tente cortar algumas coisas desnecessárias.',
        icon: sadImg,
      }
    } else if (balance === 0) {
      return {
        title: 'Ufaa!',
        description: 'Neste mês você gastou exatamente o que ganhou.',
        footerText: 'Tenha cuidade. No próxiom tente poupar o seu dinheiro.',
        icon: grinningImg,
      }
    }

    return {
      title: 'Muito Bem!',
      description: 'Sua carteira está positiva!',
      footerText: 'Continue assim. Considere investir o seu saldo',
      icon: happyImg,
    }
  }, [balance])

  const relationBetweenGainsAndExpenses = useMemo(() => {
    const total = totalGains + totalExpenses

    const percentExpenses = (totalExpenses / total) * 100
    const percentGains = (totalGains / total) * 100

    return [
      {
        title: 'Entradas',
        value: totalGains,
        percent: percentGains,
        color: theme.colors.info,
      },
      {
        title: 'Saídas',
        value: totalExpenses,
        percent: percentExpenses,
        color: theme.colors.warning,
      },
    ]
  }, [totalGains, totalExpenses, theme.colors.info, theme.colors.warning])

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
          amount={balance}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dollar"
          bgColor={theme.colors.success}
        />

        <WalletBox
          title="Entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          bgColor={theme.colors.info}
        />

        <WalletBox
          title="Saídas"
          amount={totalExpenses}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          bgColor={theme.colors.warning}
        />

        <MessageBox
          title={resumeMonth.title}
          description={resumeMonth.description}
          footerText={resumeMonth.footerText}
          icon={resumeMonth.icon}
        />

        <PieChartBox data={relationBetweenGainsAndExpenses} />
      </Content>
    </Container>
  )
}

export default Dashboard
