import styled from 'styled-components'

interface ITagProps {
  color: string
}

export const Container = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.tertiary};
  padding: 0.75rem 0.625rem;
  margin: 0.625rem 0;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    filter: brightness(0.9);
    transform: translateX(0.625rem);
  }

  > div {
    padding-left: 0.625rem;
    display: flex;
    flex-direction: column;

    small {
      opacity: 0.7;
    }
  }
`

export const Tag = styled.div<ITagProps>`
  position: absolute;
  left: 0;
  width: 0.625rem;
  height: 2rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  background-color: ${props => props.color};
`
