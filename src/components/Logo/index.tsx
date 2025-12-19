import logo from '../../assets/images/logo.png'

import { LinkLogo } from './styles'

const Logo = () => (
  <LinkLogo to="/">
    <img src={logo} alt="E-Food" />
  </LinkLogo>
)

export default Logo
