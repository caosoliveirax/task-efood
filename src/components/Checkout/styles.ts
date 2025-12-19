import { ButtonContainer } from '@components/Button/styles'
import { colors } from '../../global'
import { styled } from 'styled-components'

export const Container = styled.div`
  color: ${colors.beige};
  font-weight: 700;
  padding: 16px 0 0 0;
`

export const TitleCheckout = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
  display: flex;

  span {
    margin-left: 4px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;

  label {
    margin: 8px 0;
    font-size: 14px;
  }

  input {
    height: 32px;
    width: 100%;
    color: ${colors.beige};
    border: none;
    padding: 8px;
    color: #4b4b4b;
    font-weight: 700;

    &.error {
      border: 2px solid red;
    }
  }
`

export const RowWrapper = styled.div`
  display: flex;
  column-gap: 32px;
`

export const ButtonsWrapper = styled.div`
  margin-top: 24px;

  ${ButtonContainer} {
    margin-bottom: 8px;
  }
`
