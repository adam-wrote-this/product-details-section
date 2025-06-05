const ProductSizes = () => {
  return (
    <div className='flex flex-col gap-4 self-stretch'>
      <span className='font-normal text-sm text-neutral-500'>
        Available Sizes
      </span>
      <div className='flex flex-wrap items-center gap-4 self-stretch'>
        <div className='w-16 flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border border-solid border-indigo-600'>
          <div className='flex justify-center items-center px-0.5'>
            <span className='font-medium text-base text-neutral-900'>XS</span>
          </div>
        </div>
        <div className='w-16 flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border border-solid border-neutral-200'>
          <div className='flex justify-center items-center px-0.5'>
            <span className='font-medium text-base text-neutral-900'>S</span>
          </div>
        </div>
        <div className='w-16 flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border border-solid border-neutral-200'>
          <div className='flex justify-center items-center px-0.5'>
            <span className='font-medium text-base text-neutral-900'>M</span>
          </div>
        </div>
        <div className='w-16 flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border border-solid border-neutral-200'>
          <div className='flex justify-center items-center px-0.5'>
            <span className='font-medium text-base text-neutral-900'>L</span>
          </div>
        </div>
        <div className='w-16 flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border border-solid border-neutral-200'>
          <div className='flex justify-center items-center px-0.5'>
            <span className='font-medium text-base text-neutral-900'>XL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSizes
