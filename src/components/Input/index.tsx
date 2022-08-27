import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInputProps> = ({ ...attrs }) => {
  return <Container {...attrs} />
}

export default Input
