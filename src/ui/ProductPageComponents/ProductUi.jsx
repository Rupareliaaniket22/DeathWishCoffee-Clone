import SingleSlideShow from '../hero/ProductCategoriesCard'
import CoffeeInfo from './CoffeeInfo'
import ProductDescription from './ProductDescription'
import ProductImage from './ProductImage'

function ProductUi({ product }) {
  const img = [
    {
      bg: 'https://www.deathwishcoffee.com/cdn/shop/files/coffee_pdp_fair-trade_E12727.svg?v=1692982599&width=400',
      text: 'FAIR TRADE',
    },
    {
      bg: 'https://www.deathwishcoffee.com/cdn/shop/files/coffee_pdp_organic_E12727.svg?v=1692982570&width=400',
      text: 'NO ARTIFICIAL INGREDIENTS',
    },

    {
      bg: 'https://www.deathwishcoffee.com/cdn/shop/files/coffee_pdp_bold-smooth-taste_E12727.svg?v=1692982195&width=400',
      text: 'SMOOTH, BOLD TASTE',
    },
  ]
  const themebg = `bg-${product.theme}`
  const themeText = `text-${product.theme}`
  return (
    <>
      <div className="mt-3 flex w-screen flex-col  justify-center  lg:flex-row lg:justify-between lg:gap-32 lg:pr-8">
        <ProductImage product={product} />
        <ProductDescription product={product} themeText={themeText} />
      </div>
      <div className="flex">
        {product.category !== 'Merch' && (
          <SingleSlideShow Categories={img} type={'ProductPageImg'} />
        )}
      </div>
      <CoffeeInfo product={product} themebg={themebg} />
    </>
  )
}

export default ProductUi
