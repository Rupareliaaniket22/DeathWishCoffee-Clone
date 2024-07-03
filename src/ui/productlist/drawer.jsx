import { useState } from 'react'
import ListAccordion from './ListAccordion'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CloseIcon from '@mui/icons-material/Close'
import Cart from '../cart/Cart'
export default function Drawer({
  isFilterAndSortClicked,
  setIsFilterAndSortClicked,
  children,
  type,
}) {
  const [isTypeClicked, setIsTypeClicked] = useState()

  return (
    <>
      {!isTypeClicked ? (
        <>
          <div
            id="drawer-example"
            className={`fixed right-0 top-0 z-40 h-screen w-[70%] overflow-y-auto  bg-white p-4  transition-transform duration-300 ease-in-out dark:bg-black ${isFilterAndSortClicked ? 'translate-x-0' : 'translate-x-full'}`}
            tabIndex="-1"
            aria-labelledby="drawer-label"
          >
            <CloseIcon
              className="mb-12 size-full text-xl text-white"
              onClick={() => {
                setIsFilterAndSortClicked(false)
              }}
            />
            <div
              className="flex justify-between text-gray-300 sm:hidden"
              onClick={() => setIsTypeClicked(!isTypeClicked)}
            >
              <p className="font-[Revans] font-semibold uppercase text-white">
                filter:
              </p>
              <ArrowRightAltIcon />
            </div>
            <div className="mt-3 flex w-full justify-between gap-5 sm:hidden">
              <p className=" font-semibold uppercase text-white">Sort By:</p>
              <ListAccordion name={'Relevance'} />
            </div>
          </div>
        </>
      ) : (
        <div
          id="drawer-example"
          className={`fixed right-0 top-0 z-40 h-screen w-[70%] translate-x-0 overflow-y-auto p-4 pt-12 transition-transform duration-300 ease-in-out dark:bg-black`}
        >
          <ListAccordion
            name={'Type'}
            type="drawer"
            isTypeClicked={isTypeClicked}
            setIsTypeClicked={setIsTypeClicked}
          />
        </div>
      )}
    </>
  )
}
