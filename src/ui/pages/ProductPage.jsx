import { useParams } from 'react-router'
import { MyContext } from '../../Context/Data'
import { useContext } from 'react'
import NavLayout from '../nav/NavLayout'
import Footer from '../hero/Footer'
import ProductUi from '../ProductPageComponents/ProductUi'

function ProductPage() {
  const { products } = useContext(MyContext)
  const { id } = useParams()
  if (!products) return <h1 className="text-white">Loading...</h1>
  return (
    <div>
      <NavLayout />

      {products.map((current, index) => {
        if (current.id === id) {
          return <ProductUi product={current} key={index} />
        }
      })}
      <Footer />
    </div>
  )
}

export default ProductPage
