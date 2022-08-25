import styled from 'styled-components'

interface IContainerProps {
  bgColor: string
}

export const Container = styled.div<IContainerProps>`
  background-color: ${props => props.bgColor};
  border-radius: 0.625rem;
  color: ${props => props.theme.colors.text};
  display: flex;
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
  }

  > small {
    margin-top: auto;
  }
`
