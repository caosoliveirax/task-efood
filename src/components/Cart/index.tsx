import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@components/Button'
import Checkout from '@components/Checkout'
import type { RootReducer } from 'store'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl, totalCartPrice } from '@utils/index'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showCheckout, setShowCheckout] = useState(false)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {showCheckout ? (
          <>
            <Checkout onBackToCart={() => setShowCheckout(false)} />
          </>
        ) : (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBrl(item.preco)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.TotalPriceInfo>
                  <p>Valor total</p>
                  <span>{parseToBrl(totalCartPrice(items))}</span>
                </S.TotalPriceInfo>
                <Button
                  onClick={() => setShowCheckout(true)}
                  title="Clique aqui para continuar a compra"
                  type="button"
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio. Adicione um prato para continuar com o
                pedido.
              </p>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
