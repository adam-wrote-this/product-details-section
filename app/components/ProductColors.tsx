import { useState } from 'react'

const Color = ({
  value,
  actived = false,
  onClick
}: {
  value: string
  actived?: boolean
  onClick: (color: string) => void
}) => {
  const colorValueMapToTailwindColorValue: Record<string, string> = {
    green: 'bg-emerald-500',
    brown: 'bg-yellow-600'
  }

  return (
    <div
      className='flex justify-center items-center gap-[18.66666603088379px] p-[9.333333015441895px] rounded-[9.333333015441895px]'
      onClick={() => onClick(value)}
    >
      {actived ? (
        <div
          className={`w-[38px] h-[38px] relative rounded-full border-indigo-700 border-2`}
        >
          <div
            className={`w-[32px] h-[32px] rounded-full absolute top-[1px] bottom-0 left-[1px] right-0 ${colorValueMapToTailwindColorValue[value]}`}
          ></div>
          <div className='w-7 h-7 absolute top-[3px] bottom-0 left-[3px] right-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-7 text-white'
            >
              <path
                fillRule='evenodd'
                d='M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
      ) : (
        <div
          className={`w-[38px] h-[38px] rounded-full ${colorValueMapToTailwindColorValue[value]}`}
        ></div>
      )}
    </div>
  )
}

const ProductColors = ({
  colors,
  selectedColor,
  onSelectedChange
}: {
  colors: string[]
  selectedColor: string
  onSelectedChange: (selectedColor: string) => void
}) => {
  return (
    <div className='flex flex-col gap-4 self-stretch'>
      <span className='font-normal text-sm text-neutral-500'>
        Available Colors
      </span>
      <div className='flex items-center gap-4 self-stretch'>
        {colors.map((aColor, index) => (
          <Color
            key={index}
            value={aColor}
            actived={aColor === selectedColor}
            onClick={(selectedColor) => {
              onSelectedChange(selectedColor)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductColors
