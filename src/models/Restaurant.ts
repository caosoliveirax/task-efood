class Restaurant {
  id: number
  name: string
  category: string
  rating: string
  description: string
  infos: string[]
  image: string
  banner: string

  constructor(
    id: number,
    name: string,
    category: string,
    rating: string,
    description: string,
    infos: string[],
    image: string,
    banner: string
  ) {
    this.id = id
    this.name = name
    this.category = category
    this.rating = rating
    this.description = description
    this.infos = infos
    this.image = image
    this.banner = banner
  }
}

export default Restaurant
