import Image from 'next/image'
import { useState } from 'react'
import { ProductImage } from './Types'

const ProductImages = ({ images }: { images: ProductImage[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [heroImage, setHeroImage] = useState<ProductImage>(images[activeIndex])

  return (
    <div className='xl:w-[592px] flex flex-col gap-6 self-stretch'>
      <Image
        className='h-[400px] md:h-[800px] xl:w-[592px] xl:h-[800px] object-cover rounded-md'
        src={heroImage.image_url}
        alt='image of a product'
        width={800}
        height={800}
        priority
      />
      <div className='xl:w-[592px] flex gap-4 self-stretch overflow-auto'>
        {images.map((image, index) => (
          <Image
            key={index}
            className={`w-20 h-[120px] md:w-[188px] md:h-[190px] xl:w-40 xl:h-[190px] object-cover rounded-md ${
              activeIndex === index ? 'border-indigo-700 border-2' : ''
            }`}
            src={image.image_url}
            alt='image of a product'
            width={200}
            height={200}
            priority
            onClick={() => {
              setActiveIndex(index)
              setHeroImage(image)
            }}
          />
        ))}
        {/* <Image
          className='w-20 h-[120px] md:w-[188px] md:h-[190px] xl:w-40 xl:h-[190px] object-cover rounded-md border-indigo-700 border-2'
          src='https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/urban-oasis.jpg'
          alt='image of a product'
          width={200}
          height={200}
          priority
        />
        <Image
          className='w-20 h-[120px] md:w-[188px] md:h-[190px] xl:w-40 xl:h-[190px] object-cover rounded-md'
          src='https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/urban-oasis.jpg'
          alt='image of a product'
          width={200}
          height={200}
          priority
        />
        <Image
          className='w-20 h-[120px] md:w-[188px] md:h-[190px] xl:w-40 xl:h-[190px] object-cover rounded-md'
          src='https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/urban-oasis.jpg'
          alt='image of a product'
          width={200}
          height={200}
          priority
        />
        <Image
          className='w-20 h-[120px] md:w-[188px] md:h-[190px] xl:w-40 xl:h-[190px] object-cover rounded-md'
          src='https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/urban-oasis.jpg'
          alt='image of a product'
          width={200}
          height={200}
          priority
        />
        <Image
          className='w-20 h-[120px] md:w-[188px] md:h-[190px] xl:w-40 xl:h-[190px] object-cover rounded-md'
          src='https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/urban-oasis.jpg'
          alt='image of a product'
          width={200}
          height={200}
          priority
        /> */}
      </div>
    </div>
  )
}

export default ProductImages
