import styled from 'styled-components'
import { List as ListProducts } from '@components/RestaurantsList/styles'
import { colors } from '../../global'

export const BannerRestaurant = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 280px;
  padding: 25px 0 32px 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Category = styled.p`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
  text-transform: capitalize;
`

export const Title = styled.h3`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
`

export const List = styled(ListProducts)`
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;

  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  color: ${colors.white};
  padding: 32px;
  height: 344px;
  max-width: 1024px;
  background-color: ${colors.primary};
  position: relative;
  z-index: 1;

  .wrapper {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;
    margin-left: 24px;
  }

  img {
    display: block;
    height: 280px;
    width: 280px;
    object-fit: cover;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 16px;
    width: 16px;
    cursor: pointer;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    position: absolute;
    bottom: 32px;
    width: max-content;
    margin-bottom: 27px;
  }
`
