import React, { useEffect, useState } from 'react'
import { fetchCart } from '../cart/cartService'

const OrderSummaryDropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])

  // Function to fetch the cart data
  async function getCart() {
    const data = await fetchCart()
    setCart(data)
  }

  // Fetch cart data on component mount
  useEffect(() => {
    getCart()
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full rounded-md border bg-gray-50 p-4 xl:hidden">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={toggleDropdown}
      >
        <h3 className="flex justify-between text-xl font-bold">
          Order summary
        </h3>
        <div className="flex items-center justify-center gap-1 text-sm">
          <span>{isOpen ? 'Hide' : 'Show'}</span>
          <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Order summary details */}
      {isOpen && (
        <div className="mt-4 space-y-4">
          {cart.length > 0 ? (
            cart?.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <img
                  className="h-16 w-16 rounded"
                  src={item.productimg} // Replace with your image URL field
                  alt={item.name} // Replace with your product name field
                />
                <div className="ml-4 flex-1">
                  <h4 className="font-medium">{item.name}</h4>{' '}
                  {/* Product name */}
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>{' '}
                  {/* Product quantity */}
                </div>
                <span>
                  $
                  {parseFloat(item.product_price.replace(/[^0-9.-]+/g, '')) ||
                    0}
                </span>{' '}
                {/* Product price */}
              </div>
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </div>
      )}
    </div>
  )
}

export default OrderSummaryDropDown
