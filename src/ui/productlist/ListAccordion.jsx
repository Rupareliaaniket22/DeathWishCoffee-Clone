import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material'
import { useContext, useState } from 'react'
import { styled } from '@mui/material/styles'
import { MyContext } from '../../Context/Data'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

const CustomCheckbox = styled(Checkbox)({
  color: '#fff',
  '&.Mui-checked': {
    color: '#fff',
    backgroundColor: 'black',
  },
  '& .MuiSvgIcon-root': {
    backgroundColor: 'black',
    borderRadius: '3px',
  },
})

export default function ListAccordion({
  name,
  type,
  isTypeClicked,
  setIsTypeClicked,
}) {
  const [isFilterClicked, setIsFilterClicked] = useState(false)
  const [isSortByClicked, setIsSortByClicked] = useState(false)

  const {
    setIsBundlesChecked,
    isBundlesChecked,
    setIsCoffeeChecked,
    setIsMerchChecked,
    isMerchChecked,
    isCoffeeChecked,
    setSortBy,
  } = useContext(MyContext)

  const handleSortChange = (event) => {
    setSortBy(event)
  }

  return (
    <div className="relative">
      {type != 'drawer' ? (
        <div
          onClick={() => {
            if (name === 'Relevance') {
              setIsSortByClicked(!isSortByClicked)
              setIsFilterClicked(false)
            } else {
              setIsFilterClicked(!isFilterClicked)
              setIsSortByClicked(false)
            }
          }}
          className="flex h-full w-20 cursor-pointer items-center justify-center px-3 text-white hover:underline"
        >
          <p className=" font-light">{name}</p>
          <KeyboardArrowDownIcon
            className={`transition-transform ${isFilterClicked || isSortByClicked ? 'rotate-180' : ''}`}
          />
        </div>
      ) : (
        <div className="flex gap-4 text-white">
          <KeyboardBackspaceIcon onClick={() => setIsTypeClicked(false)} />
          <p className="text-lg">{name}</p>
        </div>
      )}
      {((isFilterClicked && name !== 'Relevance') || type === 'drawer') && (
        <div className="absolute top-full z-[5] mt-2 flex flex-col rounded-md bg-black p-3 pr-7 text-xl text-white">
          <FormControlLabel
            control={<CustomCheckbox />}
            label="Coffee"
            className="text-white"
            onChange={() => setIsCoffeeChecked(!isCoffeeChecked)}
            checked={isCoffeeChecked}
          />
          <FormControlLabel
            control={<CustomCheckbox />}
            label="Bundles"
            className="text-white"
            onChange={() => setIsBundlesChecked(!isBundlesChecked)}
            checked={isBundlesChecked}
          />
          <FormControlLabel
            control={<CustomCheckbox />}
            label="Merch"
            className="text-white"
            onChange={() => setIsMerchChecked(!isMerchChecked)}
            checked={isMerchChecked}
          />
        </div>
      )}
      {isSortByClicked && name === 'Relevance' && (
        <div className="absolute right-0  top-full z-[5] mt-2 flex flex-col rounded-lg  bg-black text-xl text-white">
          <MenuItem
            onClick={() => handleSortChange('Relevance')}
            value="Relevance"
            style={{ borderTop: '1px solid grey' }}
          >
            Relevance
          </MenuItem>
          <MenuItem
            onClick={() => handleSortChange('priceAsc')}
            value="priceAsc"
            style={{ borderTop: '1px solid grey' }}
          >
            Price: Low to High
          </MenuItem>
          <MenuItem
            onClick={() => handleSortChange('priceDesc')}
            value="priceDesc"
            style={{ borderTop: '1px solid grey' }}
          >
            Price: High to Low
          </MenuItem>
          <MenuItem
            onClick={() => handleSortChange('newest')}
            value="newest"
            style={{ borderTop: '1px solid grey' }}
          >
            Newest Arrivals
          </MenuItem>
          <MenuItem
            value="rating"
            onClick={() => handleSortChange('rating')}
            style={{
              borderTop: '1px solid grey',
              borderBottom: '1px solid grey',
            }}
          >
            Highest Rating
          </MenuItem>
        </div>
      )}
    </div>
  )
}
