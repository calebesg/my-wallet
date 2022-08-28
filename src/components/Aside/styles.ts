import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface IContainer {
  isOpen: boolean
}

export const Container = styled.aside<IContainer>`
  grid-area: AS;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
  border-right: 1px solid ${props => props.theme.colors.gray};
  padding-left: 1rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding-bottom: 1rem;
    position: fixed;
    width: 200px;
    height: ${props => (props.isOpen ? '100vh' : '68px')};
    overflow: hidden;
    z-index: 10;

    ${props =>
      props.isOpen === false &&
      css`
        border: none;
      `}
  }
`

export const Header = styled.header`
  min-height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: 600px) {
    display: none;
  }
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.25rem;

  @media (max-width: 600px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.warning};
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  display: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    display: flex;
  }
`

export const Menu = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`

export const MenuLink = styled(Link)`
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

export const Footer = styled.footer`
  visibility: hidden;

  @media (max-width: 600px) {
    visibility: visible;
  }
`
