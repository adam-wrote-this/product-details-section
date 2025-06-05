const ProductFeature = () => {
  return (
    <div className='flex flex-col items-center self-stretch'>
      <div className='flex gap-6 self-stretch'>
        <div className='flex flex-col gap-2 grow'>
          <span className='font-medium text-lg text-neutral-900'>Features</span>
          <span className='font-normal text-base text-neutral-600'>
            <ul className='list-disc pl-5'>
              <li>Designed for comfort and durability.</li>
              <li>Soft, breathable fabric ideal for travel and adventure.</li>
              <li>Large front pocket and adjustable hood.</li>
              <li>Minimalist design pairs well with any style.</li>
              <li>Made with eco-conscious materials.</li>
            </ul>
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
  )
}

export default ProductFeature
