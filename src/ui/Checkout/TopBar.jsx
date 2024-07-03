import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../Context/Data'
function TopBar() {
  const { setIsShoppingCartClicked } = useContext(MyContext)
  return (
    <div className=" flex items-center justify-around border-b-[0.8px] border-b-gray-400  py-6  pt-4 ">
      <Link to="/" className="flex w-full items-center justify-around">
        <img src="whitebg logo.jpg" className="w-[9.5rem] "></img>

        <ShoppingBagOutlinedIcon
          fontSize="medium"
          onClick={() => {
            setIsShoppingCartClicked(true)
          }}
        />
      </Link>
    </div>
  )
}

export default TopBar
