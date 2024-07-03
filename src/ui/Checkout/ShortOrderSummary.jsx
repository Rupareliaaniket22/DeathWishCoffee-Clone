import { useContext, useState } from 'react'
import { MyContext } from '../../Context/Data'
import { useQuery } from '@tanstack/react-query'
import { fetchCart } from '../cart/cartService'

function ShortOrderSummary() {
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
    <div className="xl:hidden">
      <div className="mt-4 w-full ">
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

      <div className="mt-4  space-y-2 ">
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
  )
}

export default ShortOrderSummary
