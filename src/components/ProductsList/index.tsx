import ProductItem from '@components/Product'
import { BannerRestaurant, Category, List, Title } from './styles'
import Product from '../../models/Product'

export type Props = {
  banner: string
  category: string
  title: string
  products: Product[]
}

const ProductsList = ({ products, banner, category, title }: Props) => (
  <>
    <BannerRestaurant style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Category>{category}</Category>
        <Title>{title}</Title>
      </div>
    </BannerRestaurant>
    <div className="container">
      <List>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem
              name={product.name}
              description={product.description}
              image={product.image}
            />
          </li>
        ))}
      </List>
    </div>
  </>
)

export default ProductsList
