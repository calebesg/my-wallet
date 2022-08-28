import styled, { keyframes } from 'styled-components'

interface IContainerProps {
  bgColor: string
}

const animation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Container = styled.div<IContainerProps>`
  animation: ${animation} 0.3s ease-out;

  background-color: ${props => props.bgColor};
  border-radius: 0.625rem;
  color: ${props => props.theme.colors.text};
  display: flex;
  width: 30%;
  flex: 1 1 auto;
  flex-direction: column;
  height: 150px;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
  position: relative;

  > img {
    height: 110%;
    opacity: 0.2;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(1rem, -50%);
  }

  > h2 {
    font-size: 1.125rem;
  }

  > span {
    font-size: 1.5rem;
    font-weight: 500;

    > strong {
      font-weight: normal;
    }
  }

  > small {
    margin-top: auto;
  }

  @media (max-width: 900px) {
    > span {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 600px) {
    width: 100%;

    > span {
      font-size: 1.5rem;
    }
  }
`
