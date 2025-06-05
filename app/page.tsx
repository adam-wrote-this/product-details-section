'use client'
import Product from './components/Product'
import { data } from './data'

export default function Home() {
  return (
    <div className='w-[375px] md:w-full xl:w-full flex justify-center items-center gap-2 bg-gradient-to-b from-gray-50 to-[#d2d6db]'>
      <Product>
        <Product.Images images={data.images} />
        <Product.Details
          data={data}
          onAddToCart={(productId, quantity) => {
            console.log('Adding to cart:', productId, quantity)
          }}
        />
      </Product>
    </div>
  )
}
