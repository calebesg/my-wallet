import CountUp from 'react-countup'

import { Container } from './styles'

import arrowDownIcon from '../../assets/arrow-down.svg'
import arrowUpIcon from '../../assets/arrow-up.svg'
import dollarIcon from '../../assets/dollar.svg'

interface IWalletBoxProps {
  title: string
  amount: number
  footerLabel: string
  icon: 'dollar' | 'arrowUp' | 'arrowDown'
  bgColor: string
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  bgColor,
}) => {
  const iconSelected = () => {
    switch (icon) {
      case 'dollar':
        return dollarIcon
      case 'arrowUp':
        return arrowUpIcon
      case 'arrowDown':
        return arrowDownIcon
    }
  }

  return (
    <Container bgColor={bgColor}>
      <h2>{title}</h2>
      <span>
        <strong>R$ </strong>
        <CountUp end={amount} separator="." decimal="," decimals={2} />
      </span>
      <small>{footerLabel}</small>
      <img src={iconSelected()} alt={icon} />
    </Container>
  )
}

export default WalletBox
