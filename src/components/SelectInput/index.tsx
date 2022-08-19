import { Container } from './styles'

interface ISelectInput {
  options: {
    value: string | number
    label: string | number
  }[]
}

const SelectInput: React.FC<ISelectInput> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </Container>
  )
}

export default SelectInput
