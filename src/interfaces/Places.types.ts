export interface Places {
    id?: number
    name: string
    address: string
    image: string
    rating: number
    price: number
    categories: string[]
    coordinates?: {
        latitude: number
        longitude: number
    }
}[]