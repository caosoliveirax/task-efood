import { PuffLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../global'

const Loader = () => (
  <Container>
    <PuffLoader color={colors.primary} />
  </Container>
)

export default Loader
