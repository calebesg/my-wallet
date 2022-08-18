import styled from 'styled-components'

export const Container = styled.header`
  grid-area: MH;
  background-color: ${props => props.theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.text};
`

export const Welcome = styled.span``

export const UserName = styled.strong`
  font-weight: 400;
  opacity: 0.8;
  line-height: 1.5rem;
`
