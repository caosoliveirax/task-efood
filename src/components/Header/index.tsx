import { Image as BannerImage, Description } from './styles'

import banner from '../../assets/images/banner.jpg'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <>
    <BannerImage style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <img src={logo} alt="E-Food" />
        <Description>
          Viva experiências gastronômicas no conforto da sua casa
        </Description>
      </div>
    </BannerImage>
  </>
)

export default Header
