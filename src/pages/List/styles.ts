import styled from 'styled-components'

export const Container = styled.div``

export const Filters = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  .tag__filter {
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.text};
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 2rem;
    transition: opacity 0.1s ease-out;

    &:hover {
      opacity: 0.7;
    }

    &::after {
      content: '';
      display: block;
      width: 3.5rem;
      border-radius: 2px;
      margin: 0 auto;
    }

    &--recurrent::after {
      border-bottom: 0.625rem solid ${props => props.theme.colors.gray};
      opacity: 0.2;
    }

    &--eventual::after {
      border-bottom: 0.625rem solid ${props => props.theme.colors.gray};
      opacity: 0.2;
    }
  }

  .tag-activated.tag__filter {
    &--recurrent::after {
      border-color: ${props => props.theme.colors.success};
      opacity: 1;
    }

    &--eventual::after {
      border-color: ${props => props.theme.colors.warning};
      opacity: 1;
    }
  }
`

export const Content = styled.div`
  margin-top: 2rem;
`
