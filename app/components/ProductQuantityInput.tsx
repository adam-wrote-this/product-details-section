const ProductQuantityInput = ({
  selectedQuantity = 1,
  onChange
}: {
  selectedQuantity: number
  onChange: (value: number) => void
}) => {
  const handleIncrement = () => {
    onChange(selectedQuantity + 1)
  }
  const handleDecrement = () => {
    if (selectedQuantity > 1) {
      onChange(selectedQuantity - 1)
    }
  }

  return (
    <div className='flex flex-col gap-4 self-stretch'>
      <span className='font-normal text-sm text-neutral-500'>Quantity</span>
      <div className='w-[125px] flex justify-center items-center gap-3 bg-neutral-50 p-0.5 rounded-md border border-solid border-neutral-200'>
        <div className='flex justify-center items-center gap-2 rounded'>
          <div className='w-5 h-5' onClick={handleDecrement}>
            <div className='w-[16.666667938232422px] h-[16.666667938232422px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className={`size-5 ${
                  selectedQuantity <= 1
                    ? 'text-neutral-400 cursor-not-allowed'
                    : ''
                }`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 12h14'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 self-stretch w-[49px] px-3 py-1.5 rounded'>
          <span className='font-medium text-sm text-neutral-600'>
            {selectedQuantity}
          </span>
        </div>
        <div className='flex justify-center items-center gap-2 rounded'>
          <div className='w-5 h-5' onClick={handleIncrement}>
            <div className='w-[16.666667938232422px] h-[16.666667938232422px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-5 text-neutral-600'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductQuantityInput
