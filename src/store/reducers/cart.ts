import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Restaurant['cardapio']
  isOpen: boolean
  isCheckCartOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckCartOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurant['cardapio'][number]>) => {
      const product = state.items.find((item) => item.id === action.payload.id)

      if (!product) {
        state.items.push(action.payload)
      } else {
        alert('Produto já adicionado ao carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
      state.isCheckCartOpen = false
    },
    openCheckCart: (state) => {
      state.isCheckCartOpen = true
    },
    closeCheckCart: (state) => {
      state.isCheckCartOpen = false
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  clear,
  openCheckCart,
  closeCheckCart
} = cartSlice.actions

export default cartSlice.reducer
