import { Link } from 'react-router-dom'

function FindInStore() {
  return (
    <div className="hidden hover:text-red-600 hover:underline lg:block">
      <Link to="/SamplePage">
        <h1>FIND IN STORE</h1>
      </Link>
    </div>
  )
}

export default FindInStore
