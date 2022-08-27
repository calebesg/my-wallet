import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${props => props.theme.colors.warning};
  border-radius: 0.5rem;
  color: white;
  width: 100%;
  padding: 0.625rem;
  transition: filter 0.1s ease-out;

  &:hover {
    filter: brightness(1.1);
  }
`
