import React, { useContext } from 'react'
import { MyContext } from '../../Context/Data'
import ShortOrderSummary from './ShortOrderSummary'
import OrderSummaryDropDown from './OrderSummaryDropDown'
import { useNavigate } from 'react-router'

function PaymentForm() {
  const navigate = useNavigate()
  const {
    paymentForm,
    setPaymentForm,
    useShippingAddress,
    setUseShippingAddress,
    formState,
    setFormState,
  } = useContext(MyContext)

  const handleChange = (e) => {
    setPaymentForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  function handleUseShippingAddressClicked() {
    setUseShippingAddress(!useShippingAddress)

    if (!useShippingAddress) {
      const {
        address,
        city,
        state,
        zip,
        country,
        firstName,
        lastName,
        company,
        phone,
      } = formState
      setPaymentForm((prevForm) => ({
        ...prevForm,
        firstName: firstName || '',
        lastName: lastName || '',
        company: company || '',
        address: address || '',
        apartment: '', // Clear apartment field if using shipping address
        city: city || '',
        state: state || '',
        zip: zip || '',
        country: country || '',
        phone: phone || '',
      }))
    } else {
      // Checkbox is unchecked, clear address fields
      setPaymentForm((prevForm) => ({
        ...prevForm,
        address: '',
        apartment: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: '',
        // Add any other fields that should be cleared
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/orderplaced')
  }

  return (
    <div className="w-full p-4">
      <h3 className="mb-2 text-2xl font-bold">Payment</h3>
      <p className="text-gray-600">
        All transactions are secure and encrypted.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* Payment Method Selection */}
        <div className="rounded-md border bg-[#F4F4F4] p-4">
          <div className="mb-2 flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentForm.paymentMethod === 'creditCard'}
                onChange={handleChange}
                className="mr-2"
              />
              Credit Card
            </label>
            <div className="flex space-x-2">
              <img
                src="https://img.icons8.com/color/48/visa.png"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/mastercard.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/amex.png"
                alt="Amex"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/discover.png"
                alt="Discover"
                className="h-6"
              />
            </div>
          </div>

          {/* Display credit card fields if "Credit Card" is selected */}
          {paymentForm.paymentMethod === 'creditCard' && (
            <div className="space-y-2">
              <input
                type="text"
                name="cardNumber"
                value={paymentForm.cardNumber}
                onChange={handleChange}
                placeholder="Card number"
                className="mb-2 w-full rounded-md border p-2 text-gray-600"
                required
              />
              <div className="flex w-full space-x-2">
                <input
                  type="text"
                  name="expirationDate"
                  value={paymentForm.expirationDate}
                  onChange={handleChange}
                  placeholder="Expiration date (MM / YY)"
                  className="w-1/2 flex-1 rounded-md border p-2 text-gray-600"
                  required
                />
                <input
                  type="text"
                  name="securityCode"
                  value={paymentForm.securityCode}
                  onChange={handleChange}
                  placeholder="Security code"
                  className="w-1/2 flex-1 rounded-md border p-2 text-gray-600"
                  required
                />
              </div>
              <input
                type="text"
                name="cardName"
                value={paymentForm.cardName}
                onChange={handleChange}
                placeholder="Name on card"
                className="w-full rounded-md border p-2 text-gray-600"
                required
              />
              <div className="mt-2 flex w-full items-center">
                <input
                  type="checkbox"
                  name="useShippingAddress"
                  checked={useShippingAddress}
                  onChange={handleUseShippingAddressClicked}
                  className="mr-2"
                />
                <label>Use shipping address as billing address</label>
              </div>
            </div>
          )}
        </div>

        {/* Payment Method Selection for Shop Pay */}
        <div className="flex justify-between rounded-md border bg-[#F4F4F4] p-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="shopPay"
              checked={paymentForm.paymentMethod === 'shopPay'}
              onChange={handleChange}
              className="mr-2"
            />
            Shop Pay
          </label>
          <img
            src="https://img.icons8.com/color/48/shopify.png"
            alt="Shop Pay"
            className="h-6"
          />
        </div>

        {/* Payment Method Selection for PayPal */}
        <div className="flex justify-between rounded-md border bg-[#F4F4F4] p-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="payPal"
              checked={paymentForm.paymentMethod === 'payPal'}
              onChange={handleChange}
              className="mr-2"
            />
            PayPal
          </label>
          <img
            src="https://www.paypalobjects.com/js-sdk-logos/2.2.7/paypal-blue.svg"
            alt="PayPal"
            className="h-6"
          />
        </div>

        {/* Billing Address Section */}
        <h4 className="mb-2 mt-4 text-xl font-bold">Billing address</h4>
        <div className="space-y-2 rounded-md border bg-gray-100 p-4">
          <select
            name="country"
            value={paymentForm.country}
            onChange={handleChange}
            className="w-full rounded-md border p-2 text-gray-600"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>

          <div className="flex w-full justify-between space-x-2">
            <input
              type="text"
              name="firstName"
              value={paymentForm.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-1/2 rounded-md border p-2 text-gray-600"
              required
            />
            <input
              type="text"
              name="lastName"
              value={paymentForm.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-1/2 rounded-md border p-2 text-gray-600"
              required
            />
          </div>

          <input
            type="text"
            name="company"
            value={paymentForm.company}
            onChange={handleChange}
            placeholder="Company (optional)"
            className="w-full rounded-md border p-2 text-gray-600"
          />

          <input
            type="text"
            name="address"
            value={paymentForm.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full rounded-md border p-2 text-gray-600"
            required
          />

          <input
            type="text"
            name="apartment"
            value={paymentForm.apartment}
            onChange={handleChange}
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full rounded-md border p-2 text-gray-600"
          />

          <div className="flex w-full justify-evenly  space-x-2">
            <input
              type="text"
              name="city"
              value={paymentForm.city}
              onChange={handleChange}
              placeholder="City"
              className="w-[33.33%] rounded-md border p-2 text-gray-600"
              required
            />
            <input
              type="text"
              name="state"
              value={paymentForm.state}
              onChange={handleChange}
              placeholder="State"
              className="w-[33.33%]  rounded-md border p-2 text-gray-600"
              required
            />
            <input
              type="text"
              name="zip"
              value={paymentForm.zip}
              onChange={handleChange}
              placeholder="ZIP code"
              className="w-[33.33%] rounded-md border p-2 text-gray-600"
              required
            />
          </div>

          <input
            type="text"
            name="phone"
            value={paymentForm.phone}
            onChange={handleChange}
            placeholder="Phone (optional)"
            className="w-full rounded-md border p-2 text-gray-600"
          />
        </div>

        {/* Remember Me Section */}
        <div className="mt-4">
          <h4 className="mb-2 text-xl font-bold">Remember me</h4>
          <div className="rounded-md border p-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={paymentForm.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Save my information for a faster checkout</span>
            </label>
          </div>
        </div>
        <div>
          <OrderSummaryDropDown />
          <ShortOrderSummary />
        </div>

        {/* Pay Now Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full rounded-md bg-black py-3 text-center text-white"
            onClick={handleSubmit}
          >
            Pay now
          </button>
        </div>

        {/* Order Summary */}

        {/* Links */}
        <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-600">
          <a href="/refund-policy" className="hover:text-black">
            Refund policy
          </a>
          <a href="/privacy-policy" className="hover:text-black">
            Privacy policy
          </a>
          <a href="/terms-of-service" className="hover:text-black">
            Terms of service
          </a>
          <a href="/subscription-policy" className="hover:text-black">
            Subscription policy
          </a>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm
