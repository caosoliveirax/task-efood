import { useParams } from 'react-router-dom'
import ProductsList from '@components/ProductsList'
import Header from '@components/Header'
import Cart from '@components/Cart'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '@components/Loader'

const Menu = () => {
  const { id } = useParams()

  const { data: restaurant, isLoading } = useGetRestaurantQuery(id as string)

  if (restaurant) {
    return (
      <>
        <Header size="small" />
        <Cart />
        <ProductsList
          banner={restaurant.capa}
          category={restaurant.tipo}
          title={restaurant.titulo}
          menu={restaurant.cardapio}
        />
      </>
    )
  }

  return (
    <>
      <Header size="small" />
      <Cart />
      {isLoading && <Loader />}
    </>
  )
}

export default Menu
