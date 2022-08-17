import { useMemo } from 'react'

import emojis from '../../shared/emojis'
import { Container, Profile, Welcome, UserName } from './styles'

const Header: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  return (
    <Container>
      <h1>Header</h1>

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Calebe Guimarães</UserName>
      </Profile>
    </Container>
  )
}

export default Header
