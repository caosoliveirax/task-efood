import Tag from '@components/Tag'
import { Description, Image, Wrapper, Title, Infos } from './styles'
import Rating from '@components/Rating'
import { CardContainer } from '../../global'
import Button from '@components/Button'

type Props = {
  id: number
  name: string
  category: string
  rating: string
  description: string
  infos: string[]
  image: string
}

const Restaurant = ({
  id,
  name,
  category,
  image,
  description,
  infos,
  rating
}: Props) => (
  <CardContainer>
    <Image src={image} alt={name} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
      <Tag>{category}</Tag>
    </Infos>
    <Wrapper>
      <Title>{name}</Title>
      <Rating>{rating}</Rating>
      <Description>{description}</Description>
      <Button type="link" to={`/menu/${id}`}>
        Saiba mais
      </Button>
    </Wrapper>
  </CardContainer>
)

export default Restaurant
