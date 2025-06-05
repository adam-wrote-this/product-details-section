import ProductFeature from './ProductFeature'

interface ProductFeaturesProps {
  children?: React.ReactNode
}

const ProductFeatures = ({ children }: ProductFeaturesProps) => {
  return (
    <div className='flex flex-col gap-8 self-stretch'>
      {children}
      <div className='flex flex-col items-center self-stretch pt-6 border-t border-solid border-neutral-200'>
        <div className='flex gap-6 self-stretch'>
          <div className='flex flex-col gap-2 grow'>
            <span className='font-medium text-lg text-neutral-900'>
              Fabric & Care
            </span>
            <span className='font-normal text-base text-neutral-600'>
              Machine wash cold on a gentle cycle. Tumble dry low or hang to
              dry. Do not use fabric softeners or bleach. Iron on a low setting
              if necessary.
            </span>
          </div>
          <div className='flex flex-col pt-0.5'>
            <div className='w-6 h-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-6 text-neutral-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center self-stretch pt-6 border-t border-solid border-neutral-200'>
        <div className='flex gap-6 self-stretch'>
          <div className='flex flex-col gap-2 grow'>
            <span className='font-medium text-lg text-neutral-900'>
              Shipping
            </span>
            <span className='font-normal text-base text-neutral-600'>
              Free standard shipping on all orders - no minimum spend required.
              Expedited shipping available at an additional cost. Packaged in
              biodegradable materials to reduce environmental impact.
            </span>
          </div>
          <div className='flex flex-col pt-0.5'>
            <div className='w-6 h-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-6 text-neutral-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures

ProductFeatures.Feature = ProductFeature
