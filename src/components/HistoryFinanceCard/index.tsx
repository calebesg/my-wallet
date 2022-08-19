import { Container, Tag } from './styles'

interface IHistoryFinanceCard {
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container>
      <Tag color={tagColor} />

      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>

      <strong>{amount}</strong>
    </Container>
  )
}

export default HistoryFinanceCard
