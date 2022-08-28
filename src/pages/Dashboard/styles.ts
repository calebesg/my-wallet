import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 900px) {
    gap: 1rem;
  }
`
