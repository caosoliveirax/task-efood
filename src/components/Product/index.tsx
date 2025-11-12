import Button from '@components/Button'
import { CardContainer } from '../../global'
import { Wrapper, Image, Title, Description } from './styles'

type Props = {
  name: string
  description: string
  image: string
}

const Products = ({ name, image, description }: Props) => (
  <CardContainer>
    <Image src={image} alt={name} />
    <Wrapper>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Button type="button">Adicionar ao carrinho</Button>
    </Wrapper>
  </CardContainer>
)

export default Products
