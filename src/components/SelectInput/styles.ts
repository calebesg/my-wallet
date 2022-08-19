import styled from 'styled-components'

export const Container = styled.div`
  > select {
    border-radius: 5px;
    padding: 0.3rem;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.text};
  }
`
