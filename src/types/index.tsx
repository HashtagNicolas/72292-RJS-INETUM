/**
 * ID must be unique for each ValueWithId object.
 * It is used to identify the object in the database and in the application.
 */
export interface ValueWithId {
    id: number
}

export interface Product extends ValueWithId {
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    stock: number
    brand: string
    weight: number
    thumbnail: string
    meta: Meta
}


export interface ProductInfos extends Product {
    tags: string[]
    sku: string
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Review[]
    returnPolicy: string
    minimumOrderQuantity: number
    images: string[]
}

export interface Dimensions {
    width: number
    height: number
    depth: number
}

export interface Review {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export interface Meta {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
}
