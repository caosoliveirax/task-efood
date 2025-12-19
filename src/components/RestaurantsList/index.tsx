import RestaurantItem from '@components/Restaurant'
import { List } from './styles'
import Loader from '@components/Loader'

type Props = {
  restaurants: Restaurant[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
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
}

export default RestaurantsList
