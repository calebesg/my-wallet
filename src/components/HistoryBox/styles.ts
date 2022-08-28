import styled, { keyframes } from 'styled-components'

interface ILegendProps {
  bgColor: string
}

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  animation: ${animation} 0.3s ease-out;

  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 0.625rem;
  color: ${props => props.theme.colors.text};
  padding: 2rem 1rem 3rem;
  height: 340px;
  width: 100%;

  @media (max-width: 900px) {
    height: 400px;
    padding-bottom: 6rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 0.75rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    background-color: ${props => props.bgColor};
    width: 2rem;
    height: 2rem;
    border-radius: 6px;
  }

  @media (max-width: 600px) {
    > div {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`
