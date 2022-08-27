import { FormEvent, useState } from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.svg'

import { Container, Logo, Form } from './styles'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    signIn(email, password)
  }

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira" />
        <h1>Minha Carteira</h1>
      </Logo>

      <Form onSubmit={handleSubmit}>
        <h2>Entrar</h2>

        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          required
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  )
}

export default SignIn
