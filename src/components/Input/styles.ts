import styled from 'styled-components'

export const Container = styled.input`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.text};
  width: 100%;
  padding: 0.625rem;

  ::placeholder {
    color: ${props => props.theme.colors.text};
    opacity: 0.6;
  }
`
