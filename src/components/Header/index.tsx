import { useMemo, useState } from 'react'

import emojis from '../../shared/emojis'
import ToggleTheme from '../ToggleTheme'
import { Container, Profile, Welcome, UserName } from './styles'

const Header: React.FC = () => {
  const [checked, setChecked] = useState(false)

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  return (
    <Container>
      <ToggleTheme checked={checked} onChange={() => setChecked(!checked)} />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Calebe Guimarães</UserName>
      </Profile>
    </Container>
  )
}

export default Header
