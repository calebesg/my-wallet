import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  > h1 {
    &::after {
      content: '';
      display: block;
      border-bottom: 0.625rem solid ${props => props.theme.colors.warning};
      width: 3.5rem;
    }
  }
`

export const Filters = styled.div``
