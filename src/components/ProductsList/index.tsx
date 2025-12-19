import { useDispatch } from 'react-redux'
import { useState } from 'react'
import ProductItem from '@components/Product'
import Button from '@components/Button'
import close from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '@utils/index'
import * as S from './styles'

export type Props = {
  banner: string
  category: string
  title: string
  menu: Restaurant['cardapio']
}

export type ModalState = {
  isVisible: boolean
  menu: Restaurant['cardapio'][number] | null
}

const ProductsList = ({ menu, banner, category, title }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    menu: null
  })

  const addProductCart = () => {
    if (modal.menu) {
      dispatch(add(modal.menu))
      dispatch(open())
      closeModal()
    }
  }

  const closeModal = () => {
    setModal({ isVisible: false, menu: null })
  }

  return (
    <>
      <S.BannerRestaurant style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <S.Category>{category}</S.Category>
          <S.Title>{title}</S.Title>
        </div>
      </S.BannerRestaurant>
      <div className="container">
        <S.List>
          {menu.map((prato) => (
            <li key={prato.id}>
              <ProductItem
                id={prato.id}
                descricao={prato.descricao}
                preco={prato.preco}
                porcao={prato.porcao}
                nome={prato.nome}
                foto={prato.foto}
                aoClicar={() => setModal({ isVisible: true, menu: prato })}
              />
            </li>
          ))}
        </S.List>
      </div>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img
            src={modal.menu?.foto}
            alt={`Foto do prato ${modal.menu?.nome}`}
          />
          <img
            onClick={() => {
              closeModal()
            }}
            className="close"
            src={close}
            alt="Icone de fechar"
          />
          <div className="wrapper">
            <h4>{modal.menu?.nome}</h4>
            <p>{modal.menu?.descricao}</p>
            <p>Serve: de {modal.menu?.porcao}</p>
            <Button
              onClick={addProductCart}
              title="Clique para adicionar ao carrinho"
              type="button"
            >
              Adicionar ao carrinho - {parseToBrl(modal.menu?.preco)}
            </Button>
          </div>
        </S.ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default ProductsList
