import Floatingbutton from '../hero/Floatingbutton'
import SlideShow from '../hero/SlideShow'
import ProductSlide from '../hero/ProductSlide'
import ProductCategoriesCard from '../hero/ProductCategoriesCard'
import StartSubscriptionHomepage from '../hero/StartSubscriptionHomepage'
import { useContext } from 'react'
import { MyContext } from '../../Context/Data'
function Homepage() {
  const { products, reviews, Categories } = useContext(MyContext)
  return (
    <div>
      <SlideShow />
      <Floatingbutton />
      <ProductSlide Name="New Arrivals" data={products} />
      <StartSubscriptionHomepage />
      <ProductSlide Name="BEST SELLERS" data={products} />
      <ProductCategoriesCard Categories={Categories} />
      <SlideShow reviews={reviews} />
    </div>
  )
}

export default Homepage
