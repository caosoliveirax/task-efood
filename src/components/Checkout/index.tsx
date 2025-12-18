import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { IMaskInput } from 'react-imask'
import { useSelector } from 'react-redux'

import Button from '@components/Button'
import { Container, InputWrapper, RowWrapper, TitleCheckout } from './styles'
import { usePurchaseMutation } from '../../services/api'
import type { RootReducer } from 'store'
import { Navigate } from 'react-router-dom'

const Checkout = () => {
  const [toPayment, setToPayment] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      numberAddress: '',
      complement: ''
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
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          fullName: values.fullName,
          address: values.address,
          city: values.city,
          zipCode: values.zipCode,
          numberAddress: Number(values.numberAddress)
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
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
                  className={checkInputHasError('numberAddress') ? 'error' : ''}
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
            <Button
              onClick={handleContinueToPayment}
              title="Clique aqui para continuar para o pagamento"
              type="button"
            >
              Continuar com o pagamento
            </Button>
          </>
        ) : (
          <>
            <TitleCheckout>
              Pagamento <span>- Valor a pagar R$ 190,90</span>
            </TitleCheckout>
          </>
        )}
      </form>
    </Container>
  )
}

export default Checkout
