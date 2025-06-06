import ProductInfoSection from './ProductInfoSection'

interface ProductFeaturesProps {
  children?: React.ReactNode
}

const ProductInfo = ({ children }: ProductFeaturesProps) => {
  return <div className='flex flex-col gap-8 self-stretch'>{children}</div>
}

export default ProductInfo

ProductInfo.InfoSection = ProductInfoSection
