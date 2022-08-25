import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 0.625rem;
  color: ${props => props.theme.colors.text};
  display: flex;
  width: 48%;
  flex: 1 1 auto;
  flex-direction: column;
  height: 260px;
  justify-content: space-between;
  padding: 1.8rem 1rem;

  > header {
    h3 {
      font-size: 1.8rem;
    }

    img {
      width: 2rem;
      margin-left: 0.5rem;
    }

    p {
      font-size: 1.125rem;
    }
  }
`
