import type Restaurant from 'models/Restaurant'
import RestaurantsList from '@components/RestaurantsList'

import japanese from '../../assets/images/japanese.png'
import italian from '../../assets/images/italian.png'
import Header from '@components/Header'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    category: 'Japonesa',
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana'],
    image: japanese,
    banner: japanese
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: italian,
    banner: italian
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: italian,
    banner: italian
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: italian,
    banner: italian
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: italian,
    banner: italian
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: italian,
    banner: italian
  }
]

const Home = () => (
  <>
    <Header size="big" />
    <RestaurantsList restaurants={restaurants} />
  </>
)

export default Home
