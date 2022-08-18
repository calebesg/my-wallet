import styled from 'styled-components'

export const Container = styled.aside`
  grid-area: AS;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.gray};
  padding-left: 1rem;
`

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.info};
  transition: filter 0.1s ease-out;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    filter: brightness(0.8);
  }
`
