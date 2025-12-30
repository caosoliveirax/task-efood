import { styled } from 'styled-components'
import { breakpoints, colors } from '../../global'
import { LinkLogo } from '@components/Logo/styles'
import type { Props } from '.'
import { ButtonContainer } from '@components/Button/styles'

export const HeaderContainer = styled.header<Props>`
  height: ${(props) => (props.size === 'big' ? '360px' : '162px')};

  @media (max-width: ${breakpoints.desktop}) {
    height: ${(props) => (props.size === 'big' ? '280px' : '154px')};
  }

  .container-fh {
    ${(props) =>
      props.size === 'small'
        ? `flex-direction: row;
        justify-content: space-between;
        padding-bottom: 60px;`
        : ``}

    @media (max-width: ${breakpoints.desktop}) {
      ${(props) =>
        props.size === 'small'
          ? `
          padding-bottom: 40px;`
          : ``}
    }
  }

  ${LinkLogo} {
    ${(props) =>
      props.size === 'small' ? `margin-left: 102px;` : `margin-left: 0;`}

    @media (max-width: ${breakpoints.desktop}) {
      ${(props) =>
        props.size === 'small' ? `margin-left: 14px;` : `margin-left: 0;`}
    }
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

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
    margin-top: 0px;
  }
`

export const NavLink = styled.span`
  display: block;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 16px;
  }
`

export const CartLink = styled.button`
  display: block;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 14px;
  }
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

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }

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
