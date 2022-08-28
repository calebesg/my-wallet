import styled, { keyframes } from 'styled-components'

interface ILegendProps {
  bgColor: string
}

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
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
  padding: 2rem 1rem;
  height: 260px;
  width: 48%;
  flex: 1 1 auto;
  display: flex;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 4rem;
  }
`

export const SideLeft = styled.aside`
  > h2 {
    margin-bottom: 1rem;
  }
`

export const SideRight = styled.main`
  display: flex;
  flex: 1 1 auto;
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
    font-size: 0.875rem;
    line-height: 3rem;
    text-align: center;
  }
`
