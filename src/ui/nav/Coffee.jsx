import { Link } from 'react-router-dom'

function Coffee() {
  return (
    <Link to="/productlist/:coffee">
      <div className="hidden hover:text-red-600 hover:underline lg:block">
        <h1>Coffee</h1>
      </div>
    </Link>
  )
}

export default Coffee
