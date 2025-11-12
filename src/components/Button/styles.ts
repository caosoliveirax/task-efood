import { colors } from '../../global'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  display: inline-block;
  color: ${colors.primary};
  background-color: ${colors.beige};
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  display: inline-block;
  color: ${colors.beige};
  background-color: ${colors.primary};
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
`
