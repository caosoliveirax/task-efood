import { styled } from 'styled-components'
import { colors } from '../../global'
import { LinkLogo } from '@components/Logo/styles'
import type { Props } from '.'
import { ButtonContainer } from '@components/Button/styles'

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

export const NavLink = styled.span`
  display: block;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  cursor: pointer;
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

export const CheckCartModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 620px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.primary};
  background-color: ${colors.beige};
  z-index: 1000;

  p {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;

  ${ButtonContainer} {
    padding: 12px 20px;
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`
