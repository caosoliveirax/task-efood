declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    id: number
    nome: string
    descricao: string
    preco: number
    porcao: string
    foto: string
  }[]
}
