import { FC } from 'react'
import ProductDetails from './ProductDetails'
import ProductImages from './ProductImages'

const Product = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-[375px] md:w-[768px] xl:min-w-[1440px] flex p-4'>
      <div className='flex flex-col grow bg-white rounded-md'>
        <div className='flex flex-col sm:gap-12 md:gap-16 self-stretch px-4 py-12 md:py-16 xl:p-24'>
          <div className='flex flex-col md:flex-col xl:flex-row gap-12 self-stretch xl:gap-8 xl:grow'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

Product.Images = ProductImages
Product.Details = ProductDetails
