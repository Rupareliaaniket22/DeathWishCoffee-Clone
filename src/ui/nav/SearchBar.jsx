import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../Context/Data'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import SearchInput from './SearchInput'

function SearchBar({ type }) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div>
      <SearchIcon
        fontSize="medium"
        onClick={() => type !== 'productlist' && setIsClicked(!isClicked)}
      />
      <SearchInput isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  )
}

export default SearchBar
