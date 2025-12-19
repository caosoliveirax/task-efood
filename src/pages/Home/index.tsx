import RestaurantsList from '@components/RestaurantsList'
import Header from '@components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header size="big" />
        <RestaurantsList restaurants={restaurants} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
