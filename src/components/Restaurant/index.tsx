import Tag from '@components/Tag'
import Rating from '@components/Rating'
import Button from '@components/Button'
import { CardContainer } from '../../global'
import * as S from './styles'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const Restaurant = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 252) {
      return descricao.slice(0, 249) + '...'
    }
    return descricao
  }

  return (
    <CardContainer>
      <S.Image src={capa} alt={titulo} />
      <S.Infos>
        {destacado === true && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </S.Infos>
      <S.Wrapper>
        <S.Title>{titulo}</S.Title>
        <Rating>{avaliacao}</Rating>
        <S.Description>{getDescription(descricao)}</S.Description>
        <Button
          title="Clique aqui para mais detalhes"
          type="link"
          to={`/menu/${id}`}
        >
          Saiba mais
        </Button>
      </S.Wrapper>
    </CardContainer>
  )
}

export default Restaurant
