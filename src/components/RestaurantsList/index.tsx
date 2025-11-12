import RestaurantItem from '@components/Restaurant'
import { List } from './styles'
import Restaurant from '../../models/Restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <RestaurantItem
            id={restaurant.id}
            category={restaurant.category}
            name={restaurant.name}
            rating={restaurant.rating}
            description={restaurant.description}
            infos={restaurant.infos}
            image={restaurant.image}
          />
        </li>
      ))}
    </List>
  </div>
)

export default RestaurantsList
