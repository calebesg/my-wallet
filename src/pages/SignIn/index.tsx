import { FormEvent } from 'react'
import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button'
import Input from '../../components/Input'

import { Container, Logo, Form } from './styles'

const SignIn: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira" />
        <h1>Minha Carteira</h1>
      </Logo>

      <Form onSubmit={handleSubmit}>
        <h2>Entrar</h2>

        <Input type="email" required />
        <Input type="password" required />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  )
}

export default SignIn
