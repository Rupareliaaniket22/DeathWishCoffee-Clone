import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="hidden hover:text-red-600 hover:underline lg:block">
      <Link to="/SamplePage">
        <h1>ABOUT</h1>
      </Link>
    </div>
  )
}

export default About
