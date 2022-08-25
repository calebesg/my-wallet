import styled from 'styled-components'

interface ILegendProps {
  bgColor: string
}

export const Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 0.625rem;
  color: ${props => props.theme.colors.text};
  display: flex;
  width: 48%;
  flex: 1 1 auto;
  height: 260px;
  padding: 1.8rem 1rem;
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
`
