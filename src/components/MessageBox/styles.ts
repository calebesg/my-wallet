import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  animation: ${animation} 0.3s ease-out;

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

  @media (max-width: 900px) {
    width: 100%;

    > header {
      h3 {
        font-size: 1.5rem;
      }

      img {
        width: 1.5rem;
        margin-left: 0.5rem;
      }

      p {
        font-size: 1.125rem;
      }
    }
  }
`
