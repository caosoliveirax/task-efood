import RestaurantsList from '@components/RestaurantsList'
import Header from '@components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header size="big" />
      <RestaurantsList isLoading={isLoading} restaurants={restaurants || []} />
    </>
  )
}

export default Home
