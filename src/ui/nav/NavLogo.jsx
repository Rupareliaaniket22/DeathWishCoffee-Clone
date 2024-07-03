import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

function NavLogo() {
  return (
    <Link to="/">
      <img
        src="/logo.jpg"
        alt="Home - Company Logo"
        className="absolute left-1/2 top-12 z-[100] w-24 -translate-x-1/2 lg:top-10 lg:w-[6.7rem] largelaptop:w-[7.3rem]"
      />
    </Link>
  )
}

export default NavLogo
