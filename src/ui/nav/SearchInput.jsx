import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../Context/Data'
import { Link, useNavigate } from 'react-router-dom'

function SearchInput({ setIsClicked, isClicked, type }) {
  const {
    products,
    suggestion,
    setSuggestion,
    search,
    setSearch,
    setIsEntered,
  } = useContext(MyContext)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const navigate = useNavigate()
  const [isInputFocused, setIsInputFocused] = useState(false)

  useEffect(() => {
    if (search) {
      const filteredSuggestions = products.filter((product) =>
        product.product_name.toLowerCase().startsWith(search.toLowerCase())
      )
      setSuggestion(
        filteredSuggestions.length > 0
          ? filteredSuggestions
          : products.filter((product) =>
              product.product_name.toLowerCase().includes(search.toLowerCase())
            )
      )
      setFocusedIndex(-1)
    } else {
      setSuggestion([])
      setFocusedIndex(-1)
    }
  }, [search, products, setSuggestion, setIsEntered])

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleSearchButton() {
    {
      if (search && search.length > 0) {
        if (type !== 'productlist') {
          setIsEntered(true)
          navigate(`/productlist/:type`)
        }
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      setFocusedIndex((prevIndex) =>
        prevIndex < suggestion.length - 1 ? prevIndex + 1 : 0
      )
    } else if (e.key === 'ArrowUp') {
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : suggestion.length - 1
      )
    } else if (e.key === 'Enter') {
      if (focusedIndex >= 0) {
        navigate(`/product/${suggestion[focusedIndex].id}`)
        setSearch(suggestion[focusedIndex].product_name)
        setSuggestion([])
        if (type !== 'productlist') setIsClicked(false)
      } else {
        setIsEntered(true)
        navigate(`/productlist/:type`)
      }
    }
  }

  return (
    <div>
      {(isClicked || type === 'productlist') && (
        <div
          className={`${type === 'productlist' ? 'flex-col' : 'absolute left-1/2 top-12 z-[100] -translate-x-1/2 lg:top-10'} flex h-40 w-screen items-center justify-center bg-black `}
        >
          {type === 'productlist' && (
            <p className="mt-20 font-[Revans] text-4xl text-white lg:mt-7">
              Search Results
            </p>
          )}
          <form
            onSubmit={(e) => e.preventDefault()}
            className={`relative ${type === 'productlist' ? 'mt-7' : ''} flex w-[70%] items-center justify-center pl-2 md:w-1/2`}
          >
            <input
              className={`${search && 'pl-6 pt-6'} peer w-full bg-white p-3 pr-10 text-base font-normal text-black outline-none focus:pl-6 focus:pt-6`}
              value={search}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              onBlur={() => setIsInputFocused(false)}
              onFocus={() => setIsInputFocused(true)}
            />
            <label
              className={`${search && 'top-[0.09rem] scale-75'} absolute left-4  font-semibold uppercase text-gray-500 duration-300 peer-focus:top-[0.09rem] peer-focus:scale-75 lg:text-lg`}
            >
              Search
            </label>
            <SearchIcon
              fontSize="medium"
              className="relative right-8 text-black"
              onClick={handleSearchButton}
            />
            {type !== 'productlist' && (
              <CloseIcon onClick={() => setIsClicked(false)} />
            )}
          </form>
        </div>
      )}
      {((suggestion.length > 0 && isClicked) || type !== 'productlist') &&
        isInputFocused && (
          <ul
            id="search-suggestions"
            className={`absolute ${type === 'productlist' ? '' : 'top-40'} left-[13%] z-[500] w-[60%] flex-col gap-2 bg-black p-3 md:left-[24%] md:w-[45%] lg:left-[25%] lg:w-[48%]`}
            role="listbox"
          >
            {suggestion.map((product, index) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                id={`suggestion-${index}`}
              >
                <div
                  className={`flex w-full items-center gap-2 ${focusedIndex === index ? 'bg-gray-500 bg-opacity-[0.14] underline' : ''}`}
                >
                  <img
                    src={product.productimg}
                    className="w-16 p-1 md:w-20 md:p-3"
                    alt={product.product_name}
                  />
                  <li className="w-full pr-2 text-[0.5rem] font-bold text-white md:text-sm">
                    {product.product_name}
                  </li>
                </div>
              </Link>
            ))}
          </ul>
        )}
    </div>
  )
}

export default SearchInput
