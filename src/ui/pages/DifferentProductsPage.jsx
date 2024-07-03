import { useContext, useEffect, useMemo, useState } from 'react'
import NavLayout from '../nav/NavLayout'
import { MyContext } from '../../Context/Data'
import Footer from '../hero/Footer'
import SearchInput from '../nav/SearchInput'
import { useParams } from 'react-router-dom'
import FilterAndSort from '../productlist/FilterAndSort'
import DisplayProducts from '../productlist/displayProducts'
import CloseIcon from '@mui/icons-material/Close'
import FiltersApplied from '../productlist/FiltersApplied'

function DifferentProductsPage() {
  const [currentFilters, setCurrentFilters] = useState([''])
  const {
    products = [],
    suggestion = [],
    isBundlesChecked,
    isMerchChecked,
    isCoffeeChecked,
    setIsCoffeeChecked,
    sortBy,
    setIsMerchChecked,
    setIsBundlesChecked,
  } = useContext(MyContext)
  const appliedfilter = useParams()

  useEffect(() => {
    setIsBundlesChecked(false)
    setIsCoffeeChecked(false)
    setIsMerchChecked(false)
    if (appliedfilter.Type.toLowerCase() === ':coffee') {
      setIsCoffeeChecked(true)
    } else if (appliedfilter.Type.toLowerCase() === ':merch') {
      setIsMerchChecked(true)
    } else if (appliedfilter.Type.toLowerCase() === ':bundles') {
      setIsBundlesChecked(true)
    }
  }, [
    appliedfilter,
    setIsBundlesChecked,
    setIsCoffeeChecked,
    setIsMerchChecked,
  ])

  const items = useMemo(() => {
    return suggestion.length > 0 ? suggestion : products
  }, [products, suggestion])

  useEffect(() => {
    const filters = []
    if (isBundlesChecked) filters.push('bundle')
    if (isMerchChecked) filters.push('merch')
    if (isCoffeeChecked) filters.push('coffee')
    setCurrentFilters(filters)
  }, [isBundlesChecked, isMerchChecked, isCoffeeChecked])

  const filteredAndSortedItems = useMemo(() => {
    let result = items

    if (isBundlesChecked || isMerchChecked || isCoffeeChecked) {
      result = result.filter((item) => {
        if (isBundlesChecked && item.category === 'bundle') {
          return true
        }

        if (isMerchChecked && item.category === 'Merch') {
          return true
        }

        if (isCoffeeChecked && item.category === 'coffee') {
          return true
        }

        return false
      })
    }

    if (sortBy) {
      switch (sortBy) {
        case 'priceAsc':
          result = [...result].sort(
            (a, b) =>
              parseFloat(a.product_price.replace(/[^0-9.-]+/g, '')) -
              parseFloat(b.product_price.replace(/[^0-9.-]+/g, ''))
          )
          break
        case 'priceDesc':
          result = [...result].sort(
            (a, b) =>
              parseFloat(b.product_price.replace(/[^0-9.-]+/g, '')) -
              parseFloat(a.product_price.replace(/[^0-9.-]+/g, ''))
          )
          break
        case 'rating':
          result = [...result].sort(
            (a, b) => b.product_ratings - a.product_ratings
          )
          break
        case 'newest':
          result = [...result].sort(
            (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
          )
          break
        case 'relevance':
        default:
          break
      }
    }

    return result
  }, [
    items,
    isBundlesChecked,
    isMerchChecked,
    isCoffeeChecked,
    sortBy,
    currentFilters,
  ])

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <NavLayout type="productlist" />
      <div className="lg:p-5">
        <SearchInput type="productlist" />
        <div className="mt-10 flex h-full w-screen flex-col flex-wrap items-center justify-center lg:flex-row">
          <FilterAndSort
            currentFilters={currentFilters}
            setCurrentFilters={setCurrentFilters}
          />
          {currentFilters.length > 0 &&
            currentFilters.map((current, index) => (
              <div key={index} className="mt-3 flex w-[80%]  pr-3">
                <FiltersApplied name={current.toUpperCase()} />
                <CloseIcon
                  fontSize="small"
                  className="ml-1 cursor-pointer text-white"
                  onClick={() => {
                    setCurrentFilters(
                      currentFilters.filter((_, i) => i !== index)
                    )
                    if (current.toLowerCase() === 'coffee') {
                      setIsCoffeeChecked(false)
                    }
                    if (current.toLowerCase() === 'merch') {
                      setIsMerchChecked(false)
                    }
                    if (current.toLowerCase() === 'bundle') {
                      setIsBundlesChecked(false)
                    }
                  }}
                />
              </div>
            ))}
          <DisplayProducts items={filteredAndSortedItems} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DifferentProductsPage
