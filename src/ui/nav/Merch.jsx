import { Link } from 'react-router-dom'

function Merch() {
  return (
    <Link to="/productlist/:merch">
      <div className="hidden hover:text-red-600 hover:underline lg:block">
        <h1>Merch</h1>
      </div>
    </Link>
  )
}

export default Merch
