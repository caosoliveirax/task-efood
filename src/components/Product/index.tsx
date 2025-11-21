import Button from '@components/Button'
import { CardContainer } from '../../global'
import { Wrapper, Image, Title, Description } from './styles'

type Props = {
  id: number
  nome: string
  preco: number
  foto: string
  descricao: string
  porcao: string
}

const Products = ({ nome, foto, descricao }: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 164) {
      return descricao.slice(0, 161) + '...'
    }
    return descricao
  }

  return (
    <CardContainer>
      <Image src={foto} alt={nome} />
      <Wrapper>
        <Title>{nome}</Title>
        <Description>{getDescription(descricao)}</Description>
        <Button type="button">Adicionar ao carrinho</Button>
      </Wrapper>
    </CardContainer>
  )
}

export default Products
