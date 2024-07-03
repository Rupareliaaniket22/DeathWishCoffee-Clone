import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { SvgIcon } from '@mui/material'
import DropDownContent from './DropDownContent'
import CloseIcon from '@mui/icons-material/Close'
import { motion, AnimatePresence } from 'framer-motion'

function DropdownMenu() {
  const [isclicked, setisclicked] = useState(false)

  return (
    <div className="relative z-50 flex lg:hidden">
      <button onClick={() => setisclicked(!isclicked)} className="p-3">
        {isclicked ? (
          <CloseIcon />
        ) : (
          <SvgIcon component={MenuIcon} fontSize="medium" />
        )}
      </button>
      <AnimatePresence>
        {isclicked && (
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '-100vw' }}
            transition={{ duration: 0.7 }}
            className="absolute top-2 z-10 flex w-full flex-col bg-black pt-1"
            style={{ zIndex: 1000 }}
          >
            <DropDownContent isOpen={isclicked} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DropdownMenu
