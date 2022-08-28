import { useState } from 'react'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdMenu,
  MdClose,
} from 'react-icons/md'

import { useAuth } from '../../hooks/auth'
import { useTheme } from '../../hooks/theme'

import ToggleTheme from '../ToggleTheme'

import logo from '../../assets/logo.svg'

import {
  Container,
  Header,
  MenuButton,
  LogoImg,
  Title,
  Menu,
  MenuLink,
  Footer,
} from './styles'

const Aside: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { signOut } = useAuth()
  const { theme, toggleTheme } = useTheme()

  return (
    <Container isOpen={isOpen}>
      <Header>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </MenuButton>
        <LogoImg src={logo} alt="Logo Minha carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <Menu>
        <MenuLink to="/">
          <MdDashboard size={18} />
          Dashboard
        </MenuLink>
        <MenuLink to="/list/entry-balance">
          <MdArrowUpward size={18} />
          Entradas
        </MenuLink>
        <MenuLink to="/list/exit-balance">
          <MdArrowDownward size={18} />
          Saídas
        </MenuLink>
        <MenuLink to="/" onClick={signOut}>
          <MdExitToApp size={18} />
          Sair
        </MenuLink>
      </Menu>

      <Footer>
        <ToggleTheme
          labelLeft="light"
          labelRight="dark"
          checked={theme.title === 'dark'}
          onChange={() => toggleTheme()}
        />
      </Footer>
    </Container>
  )
}

export default Aside
