import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div className="hidden hover:text-red-600 hover:underline lg:block">
      <Link to="/SamplePage">
        <h1>BLOG</h1>
      </Link>
    </div>
  )
}

export default Blog
