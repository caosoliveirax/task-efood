import { useSelector, useDispatch } from 'react-redux'

import {
  Image as BannerImage,
  CartLink,
  Description,
  HeaderContainer,
  NavLink
} from './styles'
import banner from '../../assets/images/banner.jpg'
import Logo from '@components/Logo'

import { open } from '../../store/reducers/cart'
import type { RootReducer } from 'store'

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
    <HeaderContainer size={size}>
      <BannerImage style={{ backgroundImage: `url(${banner})` }}>
        <div className="container container-fh">
          {size === 'big' ? (
            <>
              <Logo />
              <Description>
                Viva experiências gastronômicas no conforto da sua casa
              </Description>
            </>
          ) : (
            <>
              <NavLink to="/">Restaurantes</NavLink>
              <Logo />
              <CartLink onClick={openCart} type="button">
                {items.length} - produto(s) no carrinho
              </CartLink>
            </>
          )}
        </div>
      </BannerImage>
    </HeaderContainer>
  )
}

export default Header
