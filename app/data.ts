import { Product } from './components/Types'

export const data: Product = {
  product_id: 'voyager-hoodie',
  name: 'Voyager Hoodie',
  description:
    'The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.',
  category: {
    category_id: 'unisex',
    name: 'Unisex',
    created_at: '2024-01-01'
  },
  collection: {
    collection_id: 'urban',
    name: 'Urban Oasis',
    description: 'For the city dwellers',
    image_url:
      'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/urban-oasis.jpg',
    created_at: '2024-01-01'
  },
  created_at: '2024-03-20',
  colors: ['green', 'brown'],
  images: [
    {
      color: 'green',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-1.jpg'
    },
    {
      color: 'brown',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-1.jpg'
    },
    {
      color: 'green',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-2.jpg'
    },
    {
      color: 'green',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-3.jpg'
    },
    {
      color: 'green',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-4.jpg'
    }
  ],
  info: [
    {
      title: 'Features',
      description: [
        'Designed for comfort and durability.',
        'Soft, breathable fabric ideal for travel and adventure.',
        'Large front pocket and adjustable hood.',
        'Minimalist design pairs well with any style.',
        'Made with eco-conscious materials.'
      ]
    },
    {
      title: 'Fabric & Care',
      description: [
        'Machine wash cold on a gentle cycle.',
        'Tumble dry low or hang to dry.',
        'Do not use fabric softeners or bleach.',
        'Iron on a low setting if necessary.'
      ]
    },
    {
      title: 'Shipping',
      description: [
        'Free standard shipping on all orders - no minimum spend required.',
        'Expedited shipping available at an additional cost.',
        'Packaged in biodegradable materials to reduce environmental impact.'
      ]
    }
  ],
  inventory: [
    {
      sku: 'vh-green-xs',
      color: 'green',
      size: 'xs',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 85,
      stock: 415
    },
    {
      sku: 'vh-green-sm',
      color: 'green',
      size: 'sm',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 80,
      stock: 420
    },
    {
      sku: 'vh-green-md',
      color: 'green',
      size: 'md',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 75,
      stock: 425
    },
    {
      sku: 'vh-green-lg',
      color: 'green',
      size: 'lg',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 70,
      stock: 430
    },
    {
      sku: 'vh-green-xl',
      color: 'green',
      size: 'xl',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 65,
      stock: 435
    },
    {
      sku: 'vh-brown-xs',
      color: 'brown',
      size: 'xs',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 85,
      stock: 415
    },
    {
      sku: 'vh-brown-sm',
      color: 'brown',
      size: 'sm',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 80,
      stock: 420
    },
    {
      sku: 'vh-brown-md',
      color: 'brown',
      size: 'md',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 75,
      stock: 425
    },
    {
      sku: 'vh-brown-lg',
      color: 'brown',
      size: 'lg',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 70,
      stock: 430
    },
    {
      sku: 'vh-brown-xl',
      color: 'brown',
      size: 'xl',
      list_price: 95,
      discount: null,
      discount_percentage: 20,
      sale_price: 76,
      sold: 65,
      stock: 435
    }
  ],
  priceRange: {
    highest: 76,
    lowest: 76
  },
  rating: 4.06,
  reviews: 62,
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
  sold: 750
}
