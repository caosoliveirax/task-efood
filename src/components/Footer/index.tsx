import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '@components/Logo'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import x from '../../assets/images/x.png'
import * as S from './styles'
import type { RootReducer } from 'store'
import { openCheckCart } from '../../store/reducers/cart'

const Footer = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goToHome = () => {
    if (items.length > 0) {
      dispatch(openCheckCart())
    } else {
      navigate('/')
    }
  }

  return (
    <S.Container>
      <div className="container container-fh">
        <Logo onClick={goToHome} />
        <S.ListLinks>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Logo do facebook" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Logo do instagram" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="Logo do X/Twitter" />
            </a>
          </li>
        </S.ListLinks>
        <S.FooterDescription>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.FooterDescription>
      </div>
    </S.Container>
  )
}

export default Footer
