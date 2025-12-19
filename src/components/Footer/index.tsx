import Logo from '@components/Logo'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import x from '../../assets/images/x.png'
import * as S from './styles'

const Footer = () => (
  <S.Container>
    <div className="container container-fh">
      <Logo />
      <S.ListLinks>
        <li>
          <a href="#">
            <img src={facebook} alt="Logo do facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="Logo do instagram" />
          </a>
        </li>
        <li>
          <a href="#">
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

export default Footer
