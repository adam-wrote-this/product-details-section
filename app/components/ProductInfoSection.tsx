import { useState } from 'react'
import { InfoSection } from './Types'

const ProductInfoSection = ({ data }: { data: InfoSection }) => {
  const [isFolded, setIsFolded] = useState(false)

  return (
    <div className='flex flex-col items-center self-stretch'>
      <div className='flex gap-6 self-stretch'>
        <div className='flex flex-col gap-2 grow'>
          <span className='font-medium text-lg text-neutral-900'>
            {data.title}
          </span>
          {!isFolded && (
            <span className='font-normal text-base text-neutral-600'>
              <ul className='list-disc pl-5'>
                {data.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </span>
          )}
        </div>
        <div className='flex flex-col pt-0.5'>
          <div className='w-6 h-6'>
            {isFolded ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-6 text-neutral-400'
                onClick={() => setIsFolded(false)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-6 text-neutral-400'
                onClick={() => setIsFolded(true)}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfoSection
