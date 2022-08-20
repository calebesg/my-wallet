import styled from 'styled-components'

export const Container = styled.main`
  grid-area: CT;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.secondary};
  }
`
