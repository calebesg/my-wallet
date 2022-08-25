import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import {
  Container,
  SideLeft,
  Legend,
  LegendContainer,
  SideRight,
} from './styles'

interface IPieChartBoxProps {
  data: {
    title: string
    value: number
    percent: number
    color: string
  }[]
}

const PieChartBox: React.FC<IPieChartBoxProps> = ({ data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>Resultado</h2>
        <LegendContainer>
          {data.map(item => (
            <Legend key={item.title} bgColor={item.color}>
              <div>{item.percent.toFixed(1)}%</div>
              <span>{item.title}</span>
            </Legend>
          ))}
        </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="percent">
              {data.map(item => (
                <Cell key={item.title} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  )
}

export default PieChartBox
