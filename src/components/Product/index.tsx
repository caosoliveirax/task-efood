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
  aoClicar: () => void
}

const Products = ({ nome, foto, descricao, aoClicar }: Props) => {
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
        <Button
          title="Clique para ver mais detalhes"
          onClick={aoClicar}
          type="button"
        >
          Mais detalhes
        </Button>
      </Wrapper>
    </CardContainer>
  )
}

export default Products
