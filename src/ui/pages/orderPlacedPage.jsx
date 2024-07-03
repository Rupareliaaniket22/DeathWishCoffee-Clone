import React, { useContext } from 'react'
import { MyContext } from '../../Context/Data'
import { fetchCart } from '../cart/cartService'
import { useQuery } from '@tanstack/react-query'
import Loader from '../Loader' // Import your loader component here if used

// Utility function to format the date
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString(undefined, options)
}

// Function to calculate the delivery date range
const calculateDeliveryDate = () => {
  const today = new Date()
  const minDeliveryDate = new Date(today)
  const maxDeliveryDate = new Date(today)

  minDeliveryDate.setDate(today.getDate() + 5)
  maxDeliveryDate.setDate(today.getDate() + 7)

  return `${formatDate(minDeliveryDate)} - ${formatDate(maxDeliveryDate)}`
}

function OrderPlacedPage() {
  const { data: cart = [], refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
  })

  const generateRandomNumber = () => {
    let min = Math.pow(10, 4) // Minimum value for 5-digit number
    let max = Math.pow(10, 5) - 1 // Maximum value for 5-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const orderId = generateRandomNumber()

  const subtotal = Array.isArray(cart)
    ? cart.reduce((acc, item) => {
        const price =
          parseFloat(item.product_price.replace(/[^0-9.-]+/g, '')) || 0
        return acc + price * item.quantity
      }, 0)
    : 0

  const { formState, paymentForm } = useContext(MyContext)
  const deliveryDateRange = calculateDeliveryDate()

  if (!cart) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <Loader /> {/* Replace Loader with your actual loader component */}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black p-4 text-white">
      <div className="mx-auto max-w-4xl rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold text-red-600 lg:text-3xl">
          Thank You for Your Order!
        </h2>
        <p className="mb-6 text-center text-gray-400">
          Your order has been placed successfully.
        </p>

        <div className="mb-6 text-center text-lg">
          <p>
            Order Number:{' '}
            <span className="font-bold text-red-600">{orderId}</span>
          </p>
          <p>
            Estimated Delivery:{' '}
            <span className="font-bold text-red-600">{deliveryDateRange}</span>
          </p>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="mb-6">
          <h3 className="mb-4 text-xl font-semibold text-white">
            Order Summary
          </h3>
          <ul className="space-y-6">
            {cart.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-16 w-16 rounded-md object-cover shadow-md"
                    src={item.productimg}
                    alt={item.name}
                  />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">
                      {item.product_name}
                    </p>
                    <p className="text-sm text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <span className="text-lg font-medium text-red-600">
                  $
                  {(
                    parseFloat(
                      item.product_price.replace(/[^0-9.-]+/g, '') || 0
                    ) * item.quantity
                  ).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between text-lg font-bold text-white">
            <span>Total Cost:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Shipping Address
            </h3>
            <p className="text-gray-400">{formState.firstName}</p>
            <p className="text-gray-400">{formState.address}</p>
            <p className="text-gray-400">
              {formState.city}, {formState.state}, {formState.zip}
            </p>
            <p className="text-gray-400">{formState.country}</p>
            <p className="text-gray-400">{formState.phone}</p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Billing Address
            </h3>
            <p className="text-gray-400">{paymentForm.billingName}</p>
            <p className="text-gray-400">{paymentForm.billingAddress}</p>
            <p className="text-gray-400">
              {paymentForm.billingCity}, {paymentForm.billingState},{' '}
              {paymentForm.billingZip}
            </p>
            <p className="text-gray-400">{paymentForm.billingCountry}</p>
            <p className="text-gray-400">{paymentForm.billingPhone}</p>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div>
          <h3 className="mb-2 text-xl font-semibold text-white">
            Payment Method
          </h3>
          <p className="uppercase text-gray-400">{paymentForm.paymentMethod}</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a href="/" className="text-red-600 transition duration-200">
          Continue Shopping
        </a>
      </div>
    </div>
  )
}

export default OrderPlacedPage
