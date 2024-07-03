import { useState } from 'react'
import ListAccordion from '../productlist/ListAccordion'
import TuneIcon from '@mui/icons-material/Tune'
import Drawer from './drawer'

function FilterAndSort({ currentFilters, setCurrentFilters }) {
  const [isFilterAndSortClicked, setIsFilterAndSortClicked] = useState()
  return (
    <div className="mt-3 flex w-4/5 flex-col sm:flex-row sm:items-center sm:justify-between">
      <div
        className="flex  text-white sm:hidden"
        onClick={() => setIsFilterAndSortClicked(!isFilterAndSortClicked)}
      >
        <TuneIcon />
        <p className=" tracking-wider">Filter And Sort</p>
      </div>
      <div className="hidden items-center justify-center sm:flex">
        <p className="font-[Revans] font-semibold uppercase text-white">
          filter:
        </p>
        <ListAccordion name={'Type'} />
      </div>

      <div className="hidden gap-3 sm:flex">
        <p className="font-[Revans] font-semibold uppercase text-white">
          Sort By:
        </p>
        <ListAccordion name={'Relevance'} />
      </div>
      {isFilterAndSortClicked && (
        <Drawer
          isFilterAndSortClicked={isFilterAndSortClicked}
          setIsFilterAndSortClicked={setIsFilterAndSortClicked}
        />
      )}
    </div>
  )
}

export default FilterAndSort
