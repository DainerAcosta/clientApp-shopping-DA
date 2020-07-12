export interface Product {
    id: number,
    image: string,
    name_product: string,
    price: number,
    category: string,
    description: string,
    date_create?: Date
}