import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurant } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    fullName: string
    address: string
    city: string
    zipCode: string
    numberAddress: number
    complement?: string
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<void, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api

export default api
