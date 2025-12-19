import Button from '@components/Button'

import { CardContainer } from '../../global'
import * as S from './styles'

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
      <S.Image src={foto} alt={nome} />
      <S.Wrapper>
        <S.Title>{nome}</S.Title>
        <S.Description>{getDescription(descricao)}</S.Description>
        <Button
          title="Clique para ver mais detalhes"
          onClick={aoClicar}
          type="button"
        >
          Mais detalhes
        </Button>
      </S.Wrapper>
    </CardContainer>
  )
}

export default Products
