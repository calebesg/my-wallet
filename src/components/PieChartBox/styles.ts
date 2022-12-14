import styled, { keyframes } from 'styled-components'

interface ILegendProps {
  bgColor: string
}

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
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
  height: 260px;
  padding: 1.8rem 1rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const SideLeft = styled.aside`
  > h2 {
    margin-bottom: 1.25rem;
  }
`

export const LegendContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  list-style: none;
  overflow-y: scroll;
  height: 80%;
  padding-right: 1rem;

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 0.625rem;
  }
`

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    background-color: ${props => props.bgColor};
    width: 3rem;
    height: 3rem;
    border-radius: 6px;
    font-size: 1rem;
    line-height: 3rem;
    text-align: center;
  }
`

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  width: 50%;
`
