// ShoppingCart.jsx
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import { useState, useEffect, useContext } from 'react'
import Cart from '../cart/Cart'
import { MyContext } from '../../Context/Data'

function ShoppingCart() {
  const { isShoppingCartClicked, setIsShoppingCartClicked } =
    useContext(MyContext)
  const [cartItems, setCartItems] = useState([])

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/Cart')
      if (!response.ok) throw new Error('Network response was not ok')
      const data = await response.json()
      setCartItems(data)
    } catch (error) {
      console.error('Error fetching cart items:', error)
    }
  }

  useEffect(() => {
    fetchCartItems()
  }, [isShoppingCartClicked])

  const handleCartClick = () => {
    setIsShoppingCartClicked(!isShoppingCartClicked)
  }

  return (
    <div className="relative">
      <Badge
        badgeContent={cartItems.length}
        color="error"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className="cursor-pointer"
      >
        <ShoppingCartIcon fontSize="medium" onClick={handleCartClick} />
      </Badge>
      {isShoppingCartClicked && (
        <Cart
          isShoppingCartClicked={isShoppingCartClicked}
          setIsShoppingCartClicked={setIsShoppingCartClicked}
        />
      )}
    </div>
  )
}

export default ShoppingCart
