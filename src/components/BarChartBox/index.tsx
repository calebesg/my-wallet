import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'

import formateCurrency from '../../shared/formateCurrency'

import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from './styles'

interface IBarChartBoxProps {
  title: string
  data: {
    title: string
    amount: number
    percent: number
    color: string
  }[]
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) => {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
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
          <BarChart data={data}>
            <Bar dataKey="amount" name="Valor">
              {data.map(item => (
                <Cell key={item.title} fill={item.color} />
              ))}
            </Bar>
            <Tooltip
              cursor={{ fill: 'none' }}
              formatter={(value: number) => formateCurrency(value)}
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  )
}

export default BarChartBox
