import { Container, Toggle, ToggleLabel } from './styles'

interface ToggleThemeProps {
  labelLeft: string
  labelRight: string
  checked: boolean
  onChange: () => void
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({ checked, onChange }) => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <Toggle
      checked={checked}
      onChange={onChange}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
)

export default ToggleTheme
