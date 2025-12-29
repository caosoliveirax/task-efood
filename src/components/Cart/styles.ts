import { styled } from 'styled-components'
import { colors } from '../../global'
import trash from '../../assets/images/delete.png'

export const CartContainer = styled.div`
  color: ${colors.white};
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 2;
`

export const Sidebar = styled.aside`
  width: 360px;
  padding: 16px 8px 32px 8px;
  position: relative;
  background-color: ${colors.primary};
  overflow-x: auto;
  z-index: 3;

  .empty-text {
    margin-top: 32px;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${colors.beige};
  width: 100%;
  padding: 8px;
  margin-top: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    color: ${colors.primary};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${trash});
    background-size: contain;
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

export const TotalPriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 16px;
`
