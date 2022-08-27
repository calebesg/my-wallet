import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({ children, ...attrs }) => {
  return <Container {...attrs}>{children}</Container>
}

export default Button
