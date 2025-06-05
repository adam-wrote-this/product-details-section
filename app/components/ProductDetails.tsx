import { useState } from 'react'
import ProductColors from './ProductColors'
import ProductFeatures from './ProductFeatures'
import ProductQuantityInput from './ProductQuantityInput'
import ProductRating from './ProductRating'
import ProductSizes from './ProductSizes'
import { Product } from './Types'

interface ProductDetailsProps {
  data: Product
  onAddToCart: (productId: string, quantity: number) => void
}

const ProductDetails = ({ data, onAddToCart }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1)

  function handleAddToCart() {
    onAddToCart(data.product_id, quantity)
  }

  return (
    <div className='flex flex-col gap-10 self-stretch'>
      <div className='flex flex-col gap-8 self-stretch'>
        <div className='flex flex-col gap-5 self-stretch'>
          <span className='font-semibold text-3xl text-neutral-900'>
            {data.name}
          </span>
          <div className='flex flex-col gap-3 self-stretch'>
            <div className='flex flex-col justify-center gap-2 self-stretch'>
              <div className='flex items-end gap-2'>
                <span className='font-medium text-3xl text-neutral-600'>
                  $76
                </span>
                <span className='font-medium text-lg strikethrough text-neutral-400'>
                  $95
                </span>
              </div>
              <div className='w-[152px] flex items-center gap-2'>
                <div className='flex items-center bg-amber-50 px-2.5 py-1 rounded-full border border-solid border-amber-200'>
                  <span className='font-normal text-sm text-center text-amber-700'>
                    20% OFF
                  </span>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-normal text-xl text-neutral-900'>4.1</span>
              <ProductRating />
              <div className='flex items-center gap-0.5'>
                <div className='flex justify-center items-center gap-1 rounded'>
                  <div className='flex justify-center items-center px-0.5'>
                    <span className='font-medium text-sm text-indigo-700'>
                      See all 62 reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 self-stretch'>
        <span className='font-normal text-base text-neutral-600'>
          {data.description}
        </span>
      </div>
      <div className='flex flex-col gap-8 self-stretch'>
        <ProductDetails.Colors />
        <ProductDetails.Sizes />
        <ProductQuantityInput />
        <div
          className='flex justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-5 py-3 rounded'
          onClick={handleAddToCart}
        >
          <div className='flex justify-center items-center px-0.5'>
            <span className='font-medium text-base text-white'>
              Add to Cart
            </span>
          </div>
        </div>
      </div>
      <ProductDetails.Features>
        <ProductDetails.Features.Feature />
      </ProductDetails.Features>
    </div>
  )
}

export default ProductDetails

ProductDetails.Colors = ProductColors
ProductDetails.Sizes = ProductSizes
ProductDetails.Features = ProductFeatures
