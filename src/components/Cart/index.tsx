import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import Button from '@components/Button'
import type { RootReducer } from 'store'

import { close, remove } from '../../store/reducers/cart'
import { priceFormatter } from '@components/ProductsList'
import Checkout from '@components/Checkout'
import { useState } from 'react'

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

  const totalCartPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {showCheckout ? (
          <>
            <Checkout />
            <Button
              onClick={() => setShowCheckout(false)}
              title="Clique aqui para retornar ao carrinho"
              type="button"
            >
              Voltar para o carrinho
            </Button>
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
                        <span>{priceFormatter(item.preco)}</span>
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
                  <span>{priceFormatter(totalCartPrice())}</span>
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
