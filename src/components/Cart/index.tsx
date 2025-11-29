import { useDispatch, useSelector } from 'react-redux'
import {
  CartContainer,
  CartItem,
  Overlay,
  Sidebar,
  TotalPriceInfo
} from './styles'
import Button from '@components/Button'
import type { RootReducer } from 'store'

import { close, remove } from '../../store/reducers/cart'
import { priceFormatter } from '@components/ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const closeCart = () => {
    dispatch(close())
  }

  const totalCartPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{priceFormatter(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <TotalPriceInfo>
          <p>Valor total</p>
          <span>{priceFormatter(totalCartPrice())}</span>
        </TotalPriceInfo>
        <Button title="Clique aqui para continuar a compra" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
