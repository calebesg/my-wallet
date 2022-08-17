import styled from 'styled-components'

export const Container = styled.header`
  grid-area: MH;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`
