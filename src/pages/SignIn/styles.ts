import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: ${props => props.theme.colors.primary};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > h1 {
    color: ${props => props.theme.colors.text};
    font-size: 1.6rem;
  }

  > img {
    width: 2.5rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  width: 100%;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 0.625rem;
  padding: 2rem;

  > h2 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;

    &::after {
      content: '';
      display: block;
      border-bottom: 0.625rem solid ${props => props.theme.colors.warning};
      width: 3.5rem;
      border-radius: 2px;
    }
  }

  button {
    margin-top: 1rem;
  }
`
