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
        <MenuLink href="/">
          <MdDashboard size={18} />
          Dashboard
        </MenuLink>
        <MenuLink href="/">
          <MdArrowUpward size={18} />
          Entradas
        </MenuLink>
        <MenuLink href="/">
          <MdArrowDownward size={18} />
          Saídas
        </MenuLink>
        <MenuLink href="/">
          <MdExitToApp size={18} />
          Sair
        </MenuLink>
      </Menu>
    </Container>
  )
}

export default Aside
