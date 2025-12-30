import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { IMaskInput } from 'react-imask'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@components/Button'
import { usePurchaseMutation } from '../../services/api'
import type { RootReducer } from 'store'
import { parseToBrl, totalCartPrice } from '@utils/index'
import { clear, close } from '../../store/reducers/cart'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

type CheckoutProps = {
  onBackToCart: () => void
}

const Checkout = ({ onBackToCart }: CheckoutProps) => {
  const [toPayment, setToPayment] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
        .matches(
          /^[0-9]+$/,
          'Apenas números são permitidos (use o complemento para letras)'
        )
        .required('Campo obrigatório'),
      complement: Yup.string(),
      cardName: toPayment
        ? Yup.string()
            .min(3, 'Mínimo de 3 caracteres')
            .required('Campo obrigatório')
        : Yup.string(),
      cardNumber: toPayment
        ? Yup.string().min(19).max(19).required('Campo obrigatório')
        : Yup.string(),
      cardCode: toPayment
        ? Yup.string().min(3).max(3).required('Campo obrigatório')
        : Yup.string(),
      expiresMonth: toPayment
        ? Yup.string().min(2).max(2).required('Campo obrigatório')
        : Yup.string(),
      expiresYear: toPayment
        ? Yup.string().min(2).max(2).required('Campo obrigatório')
        : Yup.string()
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.numberAddress),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: Number(values.cardNumber.split(' ').join('')),
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
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

  const finishPurchase = () => {
    dispatch(close())
    onBackToCart()
    reset()
    navigate('/')
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.Container>
      {isSuccess && data ? (
        <>
          <S.TitleCheckout>Pedido realizado - {data.orderId}</S.TitleCheckout>
          <S.TextWrapper>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </S.TextWrapper>
          <S.ButtonsWrapper>
            <Button
              onClick={finishPurchase}
              title="Clique aqui para concluir o pedido"
              type="button"
            >
              Concluir
            </Button>
          </S.ButtonsWrapper>
        </>
      ) : (
        <>
          <form onSubmit={form.handleSubmit}>
            {!toPayment ? (
              <>
                <S.TitleCheckout>Entrega</S.TitleCheckout>
                <S.InputWrapper>
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
                </S.InputWrapper>
                <S.InputWrapper>
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
                </S.InputWrapper>
                <S.InputWrapper>
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
                </S.InputWrapper>
                <S.RowWrapper>
                  <S.InputWrapper>
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
                  </S.InputWrapper>
                  <S.InputWrapper>
                    <label htmlFor="numberAddress">Número</label>
                    <input
                      id="numberAddress"
                      name="numberAddress"
                      type="number"
                      value={form.values.numberAddress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('numberAddress') ? 'error' : ''
                      }
                    />
                  </S.InputWrapper>
                </S.RowWrapper>
                <S.InputWrapper>
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
                </S.InputWrapper>
                <S.ButtonsWrapper>
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
                </S.ButtonsWrapper>
              </>
            ) : (
              <>
                <S.TitleCheckout>
                  Pagamento{' '}
                  <span>
                    - Valor a pagar {parseToBrl(totalCartPrice(items))}
                  </span>
                </S.TitleCheckout>
                <S.InputWrapper>
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
                </S.InputWrapper>
                <S.RowWrapper>
                  <S.InputWrapper>
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
                  </S.InputWrapper>
                  <S.InputWrapper>
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
                  </S.InputWrapper>
                </S.RowWrapper>
                <S.RowWrapper>
                  <S.InputWrapper>
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
                  </S.InputWrapper>
                  <S.InputWrapper>
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
                  </S.InputWrapper>
                </S.RowWrapper>
                <S.ButtonsWrapper>
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
                </S.ButtonsWrapper>
              </>
            )}
          </form>
        </>
      )}
    </S.Container>
  )
}

export default Checkout
