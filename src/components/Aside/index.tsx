import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md'

import logo from '../../assets/logo.svg'
import { Container, Header, LogoImg, Title, Menu, MenuLink } from './styles'

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
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
        <MenuLink to="/">
          <MdExitToApp size={18} />
          Sair
        </MenuLink>
      </Menu>
    </Container>
  )
}

export default Aside
