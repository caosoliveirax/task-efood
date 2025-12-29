import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Logo from '@components/Logo'
import { Overlay } from '@components/Cart/styles'
import { ButtonContainer } from '@components/Button/styles'

import banner from '../../assets/images/banner.jpg'

import type { RootReducer } from 'store'
import {
  clear,
  closeCheckCart,
  open,
  openCheckCart
} from '../../store/reducers/cart'

import * as S from './styles'

export type Props = {
  size: 'big' | 'small'
}

const Header = ({ size }: Props) => {
  const { isOpen, items, isCheckCartOpen } = useSelector(
    (state: RootReducer) => state.cart
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goToHome = () => {
    if (items.length > 0) {
      dispatch(openCheckCart())
    } else {
      navigate('/')
    }
  }

  const confirmExit = () => {
    dispatch(clear())
    navigate('/')
  }

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer size={size}>
      <S.Image style={{ backgroundImage: `url(${banner})` }}>
        <div className="container container-fh">
          {size === 'big' ? (
            <>
              <Logo onClick={goToHome} />
              <S.Description>
                Viva experiências gastronômicas no conforto da sua casa
              </S.Description>
            </>
          ) : (
            <>
              <S.NavLink onClick={goToHome}>Restaurantes</S.NavLink>
              <Logo onClick={goToHome} />
              <S.CartLink onClick={openCart} type="button">
                {items.length} - produto(s) no carrinho
              </S.CartLink>
            </>
          )}
        </div>
      </S.Image>
      {isCheckCartOpen && (
        <>
          <Overlay className={isOpen ? 'is-open' : ''} />
          <S.CheckCartModal>
            <p>
              Ao sair do restaurante,{' '}
              <strong>os itens atuais do seu carrinho serão perdidos</strong>.
              Deseja continuar mesmo assim?
            </p>
            <S.Wrapper>
              <ButtonContainer onClick={confirmExit} type="button">
                Sair e limpar carrinho
              </ButtonContainer>
              <ButtonContainer
                onClick={() => dispatch(closeCheckCart())}
                type="button"
              >
                Não, continuar comprando
              </ButtonContainer>
            </S.Wrapper>
          </S.CheckCartModal>
        </>
      )}
    </S.HeaderContainer>
  )
}

export default Header
