import Button from '@components/Button'
import { Container, InputWrapper, RowWrapper, TitleCheckout } from './styles'

const Checkout = () => {
  return (
    <Container>
      <form>
        <TitleCheckout>Entrega</TitleCheckout>
        <InputWrapper>
          <label htmlFor="fullName">Quem irá receber</label>
          <input id="fullName" name="fullName" type="text" required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="address">Endereço</label>
          <input id="address" name="address" type="text" required />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="city">Cidade</label>
          <input id="city" name="city" type="text" />
        </InputWrapper>
        <RowWrapper>
          <InputWrapper>
            <label htmlFor="zipCode">CEP</label>
            <input id="zipCode" name="zipCode" type="text" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="numberAdress">Número</label>
            <input id="numberAdress" name="numberAdress" type="text" />
          </InputWrapper>
        </RowWrapper>
        <InputWrapper>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input id="complement" name="complement" type="text" />
        </InputWrapper>
        <Button
          title="Clique aqui para continuar para o pagamento"
          type="button"
        >
          Continuar com o pagamento
        </Button>
      </form>
    </Container>
  )
}

export default Checkout
