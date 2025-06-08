const sizeOptions = [
  { label: 'XS', value: 'xs' },
  { label: 'S', value: 's' },
  { label: 'M', value: 'm' },
  { label: 'L', value: 'l' },
  { label: 'XL', value: 'xl' }
]

const SizeOption = ({
  label,
  actived,
  onClick
}: {
  label: string
  actived: boolean
  onClick: () => void
}) => {
  return (
    <div
      className={`w-16 flex justify-center items-center gap-1.5 bg-white px-5 py-3 rounded border border-solid ${
        actived ? 'border-indigo-600' : 'border-neutral-200'
      }`}
      onClick={onClick}
    >
      <div className='flex justify-center items-center px-0.5'>
        <span className='font-medium text-base text-neutral-900'>{label}</span>
      </div>
    </div>
  )
}

const ProductSizes = ({
  selectedSize,
  onSelectedSizeChange
}: {
  selectedSize: string
  onSelectedSizeChange: (size: string) => void
}) => {
  return (
    <div className='flex flex-col gap-4 self-stretch'>
      <span className='font-normal text-sm text-neutral-500'>
        Available Sizes
      </span>

      <div className='flex flex-wrap items-center gap-4 self-stretch'>
        {sizeOptions.map((aSizeOption) => (
          <SizeOption
            key={aSizeOption.value}
            label={aSizeOption.label}
            actived={selectedSize === aSizeOption.value}
            onClick={() => onSelectedSizeChange(aSizeOption.value)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSizes
