import logo from '../../assets/images/logo.png'
import { LinkLogo } from './styles'

type Props = {
  onClick?: () => void
}

const Logo = ({ onClick }: Props) => {
  if (onClick) {
    return (
      <LinkLogo
        to="/"
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}
      >
        <img src={logo} alt="E-Food" />
      </LinkLogo>
    )
  }

  return (
    <LinkLogo to="/">
      <img src={logo} alt="E-Food" />
    </LinkLogo>
  )
}

export default Logo
