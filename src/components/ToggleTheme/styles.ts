import styled from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Toggle = styled(Switch).attrs<ReactSwitchProps>(({ theme }) => ({
  onColor: theme.colors.info,
  offColor: theme.colors.warning,
}))<ReactSwitchProps>``

export const ToggleLabel = styled.span`
  color: ${props => props.theme.colors.text};
`
