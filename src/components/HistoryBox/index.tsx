import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

import formateCurrency from '../../shared/formateCurrency'

import { Container, Header, LegendContainer, Legend } from './styles'

interface IHistoryBoxProps {
  data: {
    month: string
    amountOutput: number
    amountEntry: number
  }[]
  lineColorEntry: string
  lineColorOutput: string
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorEntry,
  lineColorOutput,
}) => {
  return (
    <Container>
      <Header>
        <h2>Histórico de Saldo</h2>

        <LegendContainer>
          <Legend bgColor={lineColorEntry}>
            <div />
            <span>Entradas</span>
          </Legend>

          <Legend bgColor={lineColorOutput}>
            <div />
            <span>Saida</span>
          </Legend>
        </LegendContainer>
      </Header>

      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            bottom: 5,
            left: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip formatter={(value: number) => formateCurrency(value)} />
          <Line
            type="monotone"
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorEntry}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amountOutput"
            name="Saídas"
            stroke={lineColorOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default HistoryBox
