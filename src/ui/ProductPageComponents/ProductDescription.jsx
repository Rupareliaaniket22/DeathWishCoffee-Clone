import React from 'react'
import { BasicRating } from '../hero/ProductCard'
import Options from './Options'
import AccordionUsage from './Accordion'
import Buttons from '../hero/Buttons'
import Sizes from './sizes'
import SlideInComponent from '../SlideInComponent'

function ProductDescription({ product, themeText }) {
  const productprice = Number(product.product_price.replace('$', ''))
  const onebagprice = '$' + productprice
  const threebagprice = '$' + 2 * productprice
  const fivebagprice = '$' + 3 * productprice
  const sizeOptions = product.category !== 'Merch' && [
    {
      label: '1 bag  ' + onebagprice,
      value: product.product_price,
    },
    {
      label: '3 bags  ' + threebagprice,
      value: 2 * product.product_price,
    },
    {
      label: '5 bags  ' + fivebagprice,
      value: 3 * product.product_price,
    },
  ]

  // Map the product types to options with value and label properties
  const typeOptions = product.product_description.type
    ? product.product_description.type.map((type) => ({
        value: type,
        label: type,
      }))
    : []

  return (
    <div className="mt-2 flex w-screen flex-col gap-2 p-5  lg:mt-28 ">
      <SlideInComponent>
        <h1 className={"w-[95%] font-['Revans'] text-4xl  " + themeText}>
          {product.product_name}
          <BasicRating
            rating={product.product_ratings}
            Ratedby={product.Ratedby}
          />
        </h1>
        <p className=" my-4  text-xl tracking-wider text-white lg:w-full">
          {product.product_price}
        </p>
        <p className="font-['Revans'] text-base font-black text-white lg:text-xl">
          {product.product_description.heading}
        </p>
        <p className="w-[80%] text-sm tracking-wider text-white lg:w-full">
          {product.product_description.body}
        </p>
        <p className="mt-2 w-[80%] text-xs tracking-wider text-white lg:w-full lg:text-sm">
          {product.product_description.warning}
        </p>
        <div className="mb-4 mt-4 flex w-full justify-between">
          {typeOptions.length != 0 && <Options options={typeOptions} />}
          {sizeOptions && <Options options={sizeOptions} type={'size'} />}
        </div>
        <Buttons
          type="AddToCart"
          theme={product.theme}
          button={'Add To Cart'}
          selectedProduct={product}
        />
        {product.product_description.flavour_profile && (
          <AccordionUsage
            product={product}
            name={'flavour profile'}
            type={'flavour_profile'}
          />
        )}
        {product.product_description.ATTRIBUTES && (
          <AccordionUsage
            product={product}
            name={'ATTRIBUTES'}
            type={'ATTRIBUTES'}
          />
        )}
        {product.product_description.Size && (
          <>
            <p className="text-white">Size</p>
            <Sizes product={product} />
            <AccordionUsage product={product} type={'Size'} name={'Size'} />
          </>
        )}
        {product.product_description.details && (
          <AccordionUsage product={product} type={'details'} name={'Details'} />
        )}
      </SlideInComponent>
    </div>
  )
}

export default ProductDescription
