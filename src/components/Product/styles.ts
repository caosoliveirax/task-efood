import styled from 'styled-components'

import {
  Image as ImageProduct,
  Wrapper as WrapperProduct,
  Title as TitleProduct,
  Description as DescriptionProduct
} from '@components/Restaurant/styles'
import { colors } from '../../global'

export const Image = styled(ImageProduct)`
  border: 8px solid ${colors.primary};
  border-bottom: none;
`
export const Wrapper = styled(WrapperProduct)`
  color: ${colors.beige};
  background-color: ${colors.primary};
`

export const Title = styled(TitleProduct)`
  font-size: 16px;
  font-weight: 900;
`
export const Description = styled(DescriptionProduct)`
  padding: 8px 0;
`
