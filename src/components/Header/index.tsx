import { useMemo } from 'react'
import { useTheme } from '../../hooks/theme'

import emojis from '../../shared/emojis'
import ToggleTheme from '../ToggleTheme'
import { Container, Profile, Welcome, UserName } from './styles'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  return (
    <Container>
      <ToggleTheme
        labelLeft="light"
        labelRight="dark"
        checked={theme.title === 'dark'}
        onChange={() => toggleTheme()}
      />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Calebe Guimarães</UserName>
      </Profile>
    </Container>
  )
}

export default Header
