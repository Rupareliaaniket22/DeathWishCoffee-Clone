function ProductImage({ product }) {
  return (
    <div className=" flex flex-col gap-10 p-10">
      <p className=" flex  text-sm font-light leading-8 text-white lg:mb-1  ">
        Homepage &gt; Coffee &gt; {product.product_name}
      </p>
      <img
        src={product.productimg}
        alt="product image"
        className=" lg:w-[150rem] lg:pl-16"
      ></img>
    </div>
  )
}

export default ProductImage
