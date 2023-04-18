export interface Places {
    id: number
    name: string
    address: string
    image: string
    rating: number
    price: string
    reviews: number
    categories: string[]
    coordinates: {
        latitude: number
        longitude: number
    }
}[]