import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'
function Account() {
  return (
    <div className="hidden hover:text-red-600 hover:underline md:block lg:block">
      <Link to="/login">
        <PersonIcon fontSize="medium" />
      </Link>
    </div>
  )
}

export default Account
