import { useSelector, useDispatch } from 'react-redux'

import Logo from '@components/Logo'

import banner from '../../assets/images/banner.jpg'

import type { RootReducer } from 'store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

export type Props = {
  size: 'big' | 'small'
}

const Header = ({ size }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer size={size}>
      <S.Image style={{ backgroundImage: `url(${banner})` }}>
        <div className="container container-fh">
          {size === 'big' ? (
            <>
              <Logo />
              <S.Description>
                Viva experiências gastronômicas no conforto da sua casa
              </S.Description>
            </>
          ) : (
            <>
              <S.NavLink to="/">Restaurantes</S.NavLink>
              <Logo />
              <S.CartLink onClick={openCart} type="button">
                {items.length} - produto(s) no carrinho
              </S.CartLink>
            </>
          )}
        </div>
      </S.Image>
    </S.HeaderContainer>
  )
}

export default Header
