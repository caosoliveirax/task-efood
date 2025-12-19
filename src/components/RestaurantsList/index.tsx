import RestaurantItem from '@components/Restaurant'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurante) => (
        <li key={restaurante.id}>
          <RestaurantItem
            id={restaurante.id}
            titulo={restaurante.titulo}
            tipo={restaurante.tipo}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            destacado={restaurante.destacado}
            capa={restaurante.capa}
          />
        </li>
      ))}
    </List>
  </div>
)

export default RestaurantsList
