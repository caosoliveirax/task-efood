import { styled } from 'styled-components'

import type { Props } from '.'
import { Link } from 'react-router-dom'
import { colors } from '../../global'
import { LinkLogo } from '@components/Logo/styles'

export const HeaderContainer = styled.header<Props>`
  height: ${(props) => (props.size === 'big' ? '360px' : '162px')};

  .container-fh {
    ${(props) =>
      props.size === 'small'
        ? `flex-direction: row;
        justify-content: space-between;
        padding-bottom: 60px;`
        : ``}
  }

  ${LinkLogo} {
    ${(props) =>
      props.size === 'small' ? `margin-left: 102px;` : `margin-left: 0;`}
  }
`

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-size: contain;
`

export const Description = styled.p`
  max-width: 539px;
  font-weight: 900;
  font-size: 36px;
  margin-top: 138.5px;
`

export const NavLink = styled(Link)`
  display: block;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
`

export const CartLink = styled.button`
  display: block;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
