export interface Product {
  product_id: string
  name: string
  description: string
  category: Category
  collection: Collection
  created_at: string
  colors: string[]
  images: ProductImage[]
  info: InfoSection[]
  inventory: InventoryItem[]
  priceRange: PriceRange
  rating: number
  reviews: number
  sizes: Size[]
  sold: number
}

interface Category {
  category_id: string
  name: string
  created_at: string
}

interface Collection {
  collection_id: string
  name: string
  description: string
  image_url: string
  created_at: string
}

export interface ProductImage {
  color: string
  image_url: string
}

export interface InfoSection {
  title: string
  description: string[]
}

interface InventoryItem {
  sku: string
  color: string
  size: Size
  list_price: number
  discount: null
  discount_percentage: number
  sale_price: number
  sold: number
  stock: number
}

interface PriceRange {
  highest: number
  lowest: number
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
