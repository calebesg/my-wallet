import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useTheme } from 'styled-components'

import {
  Container,
  SideLeft,
  Legend,
  LegendContainer,
  SideRight,
} from './styles'

const PieChartBox: React.FC = () => {
  const theme = useTheme()

  return (
    <Container>
      <SideLeft>
        <h2>Resultado</h2>
        <LegendContainer>
          <Legend bgColor={theme.colors.info}>
            <div>5%</div>
            <span>Entradas</span>
          </Legend>
          <Legend bgColor={theme.colors.warning}>
            <div>95%</div>
            <span>Saídas</span>
          </Legend>
          <Legend bgColor={theme.colors.info}>
            <div>5%</div>
            <span>Entradas</span>
          </Legend>
          <Legend bgColor={theme.colors.warning}>
            <div>95%</div>
            <span>Saídas</span>
          </Legend>
          <Legend bgColor={theme.colors.info}>
            <div>5%</div>
            <span>Entradas</span>
          </Legend>
          <Legend bgColor={theme.colors.warning}>
            <div>95%</div>
            <span>Saídas</span>
          </Legend>
        </LegendContainer>
      </SideLeft>

      <SideRight>
        {/* <ResponsiveContainer>
          <PieChart>
            <Pie />
          </PieChart>
        </ResponsiveContainer> */}
      </SideRight>
    </Container>
  )
}

export default PieChartBox
