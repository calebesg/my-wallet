import styled from 'styled-components'

interface ITitleContainer {
  lineColor: string
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleContainer = styled.div<ITitleContainer>`
  > h1 {
    &::after {
      content: '';
      display: block;
      border-bottom: 0.625rem solid ${props => props.lineColor};
      width: 3.5rem;
      border-radius: 2px;
    }
  }

  @media (max-width: 600px) {
    > h1 {
      font-size: 1.5rem;
    }
  }
`

export const Controllers = styled.div`
  display: flex;
  gap: 0.5rem;
`
