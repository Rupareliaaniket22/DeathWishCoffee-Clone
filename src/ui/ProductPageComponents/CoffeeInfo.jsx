function CoffeeInfo({ product, themebg }) {
  if (product.category === 'Merch') return null
  return (
    <div className={'p-1 text-white  md:flex md:items-center ' + themebg}>
      <img
        src={product.productimg}
        alt="coffee image"
        className="md:order-1 md:size-2/5"
      ></img>

      <div className="text-center md:text-left">
        <p
          className={'mt-2 p-4  font-[Revans] text-3xl font-black md:text-4xl'}
        >
          FIERCELY STRONG COFFEE
        </p>
        <p className="px-3  font-light tracking-wider  md:text-lg">
          Death Wish Coffee is made to fuel bold souls—and bold souls deserve
          high-quality ingredients. We harness the power of naturally
          high-caffeine robusta beans and blend them with smooth, balanced
          arabica beans to produce a bold, delicious brew.
        </p>
      </div>
    </div>
  )
}

export default CoffeeInfo
