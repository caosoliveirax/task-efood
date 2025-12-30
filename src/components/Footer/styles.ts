import { styled } from 'styled-components'
import { breakpoints, colors } from '../../global'

export const Container = styled.footer`
  height: 298px;
  background-color: ${colors.beige};

  .container-fh {
    justify-content: inherit;
  }

  a {
    height: 100%;

    @media (max-width: ${breakpoints.desktop}) {
      height: auto;
    }
  }
`

export const ListLinks = styled.ul`
  margin-top: 32.5px;
  display: flex;
  column-gap: 8px;
`

export const FooterDescription = styled.p`
  margin-top: 80px;
  font-size: 10px;
  text-align: center;
  width: 480px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-top: 40px;
  }
`
