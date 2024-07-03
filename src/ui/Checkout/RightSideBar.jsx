import React, { useContext, useState } from 'react'
import { fetchCart } from '../cart/cartService'
import Loader from '../Loader'
import { useQuery } from '@tanstack/react-query'
import { MyContext } from '../../Context/Data'

function RightSideBar() {
  const [discountCode, setDiscountCode] = useState('')
  const { formState, paymentForm } = useContext(MyContext)

  const handleDiscountChange = (e) => setDiscountCode(e.target.value)
  const handleApplyDiscount = () =>
    console.log('Applying discount:', discountCode)

  const { data: cart = [], refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
  })

  const subtotal = Array.isArray(cart)
    ? cart.reduce((acc, item) => {
        const price =
          parseFloat(item.product_price.replace(/[^0-9.-]+/g, '')) || 0
        return acc + price * item.quantity
      }, 0)
    : 0

  const shipping = 0
  const total = subtotal + shipping

  if (!cart) {
    return <Loader />
  }

  return (
    <div className="flex hidden h-screen w-screen flex-col items-center justify-center space-y-4   bg-[#F9F7F7] p-8 xl:block xl:w-1/2">
      <div className="max-w-xl rounded-lg bg-[#F9F7F7] p-3">
        <div className=" hidden   space-y-4 xl:block">
          {Array.isArray(cart) &&
            cart.map((item) => {
              const price =
                parseFloat(item.product_price.replace(/[^0-9.-]+/g, '')) || 0
              const totalItemPrice = (price * item.quantity).toFixed(2)
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <img
                    src={item.productimg}
                    alt={item.product_name}
                    className="h-16 w-16 rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-sm">{item.product_name}</h3>
                    <p className="text-sm">
                      {item.quantity} × ${price.toFixed(2)}
                    </p>
                  </div>
                  <p className="text-right">${totalItemPrice}</p>
                </div>
              )
            })}
        </div>

        <div className="mt-4  hidden  w-full  xl:block ">
          <label htmlFor="discount" className=" block w-full text-gray-700">
            Discount code or gift card
          </label>
          <div className="mt-2 flex w-full">
            <input
              type="text"
              id="discount"
              value={discountCode}
              onChange={handleDiscountChange}
              className="w-full flex-1 rounded-l-md border border-gray-300 p-2"
            />
            <button
              onClick={handleApplyDiscount}
              className=" rounded-r-md bg-gray-200 p-2 text-gray-700 hover:bg-gray-300"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="mt-4 hidden space-y-2 xl:block">
          <div className="flex justify-between">
            <span className="text-gray-700">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Shipping</span>
            <span>{formState.address}</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>USD ${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar
