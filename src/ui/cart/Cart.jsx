import React, { useContext, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useQuery } from '@tanstack/react-query'
import CartItems from './CartItems'
import Buttons from '../hero/Buttons'
import { fetchCart } from './cartService'
import { MyContext } from '../../Context/Data'

function Cart() {
  const {
    isShoppingCartClicked,
    setIsShoppingCartClicked,
    isItemAdded,
    setIsItemAdded,
  } = useContext(MyContext)

  // Fetch cart items when the cart is clicked or an item is added
  const { data: cartItems = [], refetch } = useQuery({
    queryKey: ['cartItems'],
    queryFn: fetchCart,
    enabled: isShoppingCartClicked, // Only fetch when the cart is clicked
    onSuccess: () => {
      // Reset the item added state once the fetch is successful
      setIsItemAdded(false)
    },
  })

  // Function to calculate the subtotal of cart items
  const calculateSubtotal = (items) => {
    return items
      .reduce((acc, item) => {
        const price =
          parseFloat(item.product_price.replace(/[^0-9.-]+/g, '')) || 0
        const quantity = Number(item.quantity) || 0
        return acc + price * quantity
      }, 0)
      .toFixed(2)
  }

  // Function to handle the closing of the cart
  const handleCloseCart = () => {
    setIsShoppingCartClicked(false)
  }

  return (
    <div
      id="drawer"
      className={`fixed right-0 top-0 z-[1000] flex h-screen w-full translate-x-0 flex-col justify-between overflow-hidden bg-white p-4 pt-12 transition-transform duration-300 ease-in-out ${
        isShoppingCartClicked ? '' : 'translate-x-full transform'
      } md:w-[50%] dark:bg-black`}
    >
      <div className="flex h-screen w-full flex-col overflow-y-scroll p-2 pb-16">
        <div className="fixed top-7 flex w-full bg-black px-10">
          <h1 className="w-full text-center font-[Revans] text-4xl text-black dark:text-white">
            Your Cart
          </h1>
          <CloseIcon
            className="mb-2 cursor-pointer text-xl text-black dark:text-white"
            onClick={handleCloseCart}
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((current, index) => (
            <div key={index} className="flex flex-col">
              <CartItems product={current} refetchCart={refetch} />
            </div>
          ))
        ) : (
          <p className="mt-10 text-center text-gray-400">Your cart is empty</p>
        )}
      </div>
      <div className="fixed bottom-0 mt-4 w-full overflow-hidden bg-black p-3 pr-8 text-black dark:text-white">
        <div className="mb-2 flex justify-between">
          <p className="text-lg">Subtotal ({cartItems.length} items)</p>
          <p className="text-lg">${calculateSubtotal(cartItems)}</p>
        </div>
        <Buttons button="Checkout" type="Checkout" />
      </div>
    </div>
  )
}

export default Cart
