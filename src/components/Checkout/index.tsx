import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { IMaskInput } from 'react-imask'
import { useSelector } from 'react-redux'

import Button from '@components/Button'
import {
  ButtonsWrapper,
  Container,
  InputWrapper,
  RowWrapper,
  TitleCheckout
} from './styles'
import { usePurchaseMutation } from '../../services/api'
import type { RootReducer } from 'store'
import { Navigate } from 'react-router-dom'
import { parseToBrl, totalCartPrice } from '@utils/index'

type CheckoutProps = {
  onBackToCart: () => void
}

const Checkout = ({ onBackToCart }: CheckoutProps) => {
  const [toPayment, setToPayment] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      numberAddress: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'Mínimo de 3 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string()
        .min(3, 'Mínimo de 3 caracteres')
        .required('Campo obrigatório'),
      city: Yup.string()
        .min(3, 'Mínimo de 3 caracteres')
        .required('Campo obrigatório'),
      zipCode: Yup.string().min(9).max(9).required('Campo obrigatório'),
      numberAddress: Yup.string()
        .min(1, 'Mínimo de 1 caracteres')
        .required('Campo obrigatório'),
      complement: Yup.string(),
      cardName: toPayment
        ? Yup.string().required('Campo obrigatório')
        : Yup.string(),
      cardNumber: toPayment
        ? Yup.string().required('Campo obrigatório')
        : Yup.string(),
      cardCode: toPayment
        ? Yup.string().required('Campo obrigatório')
        : Yup.string(),
      expiresMonth: toPayment
        ? Yup.string().required('Campo obrigatório')
        : Yup.string(),
      expiresYear: toPayment
        ? Yup.string().required('Campo obrigatório')
        : Yup.string()
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          fullName: values.fullName,
          address: values.address,
          city: values.city,
          zipCode: values.zipCode,
          numberAddress: values.numberAddress,
          complement: values.complement
        },
        payment: {
          card: {
            cardName: values.cardName,
            cardNumber: Number(values.cardNumber.split(' ').join('')),
            cardCode: Number(values.cardCode),
            expiresMonth: Number(values.expiresMonth),
            expiresYear: Number(values.expiresYear)
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
          nome: item.nome
        }))
      })
    }
  })

  const handleContinueToPayment = async () => {
    const errors = await form.validateForm()

    if (Object.keys(errors).length === 0) {
      setToPayment(true)
      console.log(form)
    } else {
      form.setTouched({
        fullName: true,
        address: true,
        city: true,
        zipCode: true,
        numberAddress: true
      })
    }
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isInvalid && isTouched

    return hasError
  }

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <Container>
      {isSuccess ? (
        <>
          <p>Pedido concluido!</p>
        </>
      ) : (
        <>
          <form onSubmit={form.handleSubmit}>
            {!toPayment ? (
              <>
                <TitleCheckout>Entrega</TitleCheckout>
                <InputWrapper>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </InputWrapper>
                <RowWrapper>
                  <InputWrapper>
                    <label htmlFor="zipCode">CEP</label>
                    <IMaskInput
                      mask="00000-000"
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <label htmlFor="numberAddress">Número</label>
                    <input
                      id="numberAddress"
                      name="numberAddress"
                      type="text"
                      value={form.values.numberAddress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('numberAddress') ? 'error' : ''
                      }
                    />
                  </InputWrapper>
                </RowWrapper>
                <InputWrapper>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    id="complement"
                    name="complement"
                    type="text"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
                </InputWrapper>
                <ButtonsWrapper>
                  <Button
                    onClick={handleContinueToPayment}
                    title="Clique aqui para continuar para o pagamento"
                    type="button"
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    onClick={onBackToCart}
                    title="Clique aqui para retornar ao carrinho"
                    type="button"
                  >
                    Voltar para o carrinho
                  </Button>
                </ButtonsWrapper>
              </>
            ) : (
              <>
                <TitleCheckout>
                  Pagamento{' '}
                  <span>
                    - Valor a pagar {parseToBrl(totalCartPrice(items))}
                  </span>
                </TitleCheckout>
                <InputWrapper>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    name="cardName"
                    type="text"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardName') ? 'error' : ''}
                  />
                </InputWrapper>
                <RowWrapper>
                  <InputWrapper>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <IMaskInput
                      mask="0000 0000 0000 0000"
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <label htmlFor="cardCode">CVV</label>
                    <IMaskInput
                      mask="000"
                      id="cardCode"
                      name="cardCode"
                      type="text"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                    />
                  </InputWrapper>
                </RowWrapper>
                <RowWrapper>
                  <InputWrapper>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <IMaskInput
                      mask="00"
                      id="expiresMonth"
                      name="expiresMonth"
                      type="text"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <IMaskInput
                      mask="00"
                      id="expiresYear"
                      name="expiresYear"
                      type="text"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                    />
                  </InputWrapper>
                </RowWrapper>
                <ButtonsWrapper>
                  <Button
                    onClick={form.handleSubmit}
                    title="Clique aqui para finalizar o pagamento"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? 'Finalizando o pagamento'
                      : 'Finalizar o pagamento'}
                  </Button>
                  <Button
                    onClick={() => setToPayment(false)}
                    title="Voltar para a entrega"
                    type="button"
                  >
                    Voltar para a edição de endereço
                  </Button>
                </ButtonsWrapper>
              </>
            )}
          </form>
        </>
      )}
    </Container>
  )
}

export default Checkout
