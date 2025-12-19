import star from '../../assets/images/star.png'
import * as S from './styles'

type Props = {
  children: string
}

const Rating = ({ children }: Props) => (
  <S.RatingContainer>
    <S.Score>{children}</S.Score>
    <img src={star} alt="Estrela de avaliação" />
  </S.RatingContainer>
)

export default Rating
