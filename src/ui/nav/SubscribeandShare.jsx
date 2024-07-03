import { Link } from 'react-router-dom'

function SubscribeandShare() {
  return (
    <div className="hidden hover:text-red-600 hover:underline lg:block">
      <Link to="/SamplePage">
        <h1>SUBSCRIBE & SAVE</h1>
      </Link>
    </div>
  )
}

export default SubscribeandShare
