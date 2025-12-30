import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints } from '../../global'

export const LinkLogo = styled(Link)`
  display: block;

  @media (max-width: ${breakpoints.desktop}) {
    img {
      height: auto;
      width: 80%;
    }
  }
`
