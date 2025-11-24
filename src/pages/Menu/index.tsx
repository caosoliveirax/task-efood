import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductsList from '@components/ProductsList'
import Header from '@components/Header'
import type { Restaurant } from '../../pages/Home'

const Menu = () => {
  const { id } = useParams()

  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  const restaurant = restaurants.find((r) => r.id === Number(id))

  if (!restaurant) {
    return (
      <>
        <Header size="small" />
        <h3 className="container">Carregando</h3>
      </>
    )
  }

  return (
    <>
      <Header size="small" />
      <ProductsList
        banner={restaurant?.capa}
        category={restaurant?.tipo}
        title={restaurant.titulo}
        menu={restaurant.cardapio}
      />
    </>
  )
}

export default Menu
