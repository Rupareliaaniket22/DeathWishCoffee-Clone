import { Link } from 'react-router-dom'
import SlideInComponent from '../SlideInComponent'
import ProductCard from '../hero/ProductCard'
import Loader from '../Loader'

function DisplayProducts({ items }) {
  return (
    <>
      {items.length > 0 ? (
        items.map((current) => (
          <div
            key={current.id || `${current.title}-${current.product_price}`}
            className=" flex w-4/5 flex-wrap items-center justify-center py-3 lg:m-5 lg:w-1/5"
          >
            <Link to={`/product/${current.id}`}>
              <SlideInComponent>
                <ProductCard product={current} type={'productpagelist'} />
              </SlideInComponent>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-white">No products found</p>
      )}
    </>
  )
}

export default DisplayProducts
