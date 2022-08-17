import styled from 'styled-components'

export const Container = styled.main`
  grid-area: CT;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
`
