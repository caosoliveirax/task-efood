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
    z-index: 100;
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
