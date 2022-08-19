import { useTheme } from 'styled-components'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import { Container } from './styles'

const Dashboard: React.FC = () => {
  const theme = useTheme()

  const options = [
    { value: 'Calebe', label: 'Calebe' },
    { value: 'Maria', label: 'Maria' },
    { value: 'Pedro', label: 'Pedro' },
  ]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor={theme.colors.success}>
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  )
}

export default Dashboard
