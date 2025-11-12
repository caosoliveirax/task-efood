import { useParams } from 'react-router-dom'
import pizza from '../../assets/images/pizza.png'

import ProductsList from '@components/ProductsList'
import Header from '@components/Header'

import { restaurants } from '../Home'
import Products from '../../models/Product'

const menu: Products[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 2,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  }
]

const Menu = () => {
  const { id } = useParams()

  const restaurant = restaurants.find((r) => r.id === Number(id))

  if (!restaurant) {
    return (
      <>
        <Header size="small" />
        <h3 className="container">Restaurante não encontrado.</h3>
      </>
    )
  }

  return (
    <>
      <Header size="small" />
      <ProductsList
        banner={restaurant.banner}
        category={restaurant.category}
        title={restaurant.name}
        products={menu}
      />
    </>
  )
}

export default Menu
