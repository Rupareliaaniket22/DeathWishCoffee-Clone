import React, { useContext, useState } from 'react'
import { MyContext } from '../../Context/Data'

function DeliveryForm() {
  const { formState, setFormState } = useContext(MyContext)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formState)
  }

  return (
    <div className="w-full p-4">
      <h3 className="mb-4 text-2xl font-bold">Delivery</h3>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="flex flex-col">
          <select
            id="country"
            name="country"
            value={formState.country}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>

        <div className="flex space-x-2">
          <div className="flex flex-1 flex-col">
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formState.firstName}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
              placeholder="First name"
              required
            />
          </div>
          <div className="flex flex-1 flex-col">
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formState.lastName}
              onChange={handleChange}
              className="mt-1 rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <input
            id="company"
            name="company"
            type="text"
            value={formState.company}
            onChange={handleChange}
            className="mt-1 rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
            placeholder="Company"
          />
        </div>

        <div className="flex flex-col">
          <input
            id="address"
            name="address"
            type="text"
            value={formState.address}
            onChange={handleChange}
            className="mt-1 rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
            placeholder="Address"
            required
          />
        </div>

        <div className="flex flex-col">
          <input
            id="apartment"
            name="apartment"
            type="text"
            value={formState.apartment}
            onChange={handleChange}
            className="mt-1 rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
            placeholder="Apartment, suite, etc."
          />
        </div>

        <div className="flex w-full space-x-2">
          <div className="flex w-[33.33%] flex-1 flex-col justify-evenly">
            <input
              id="city"
              name="city"
              type="text"
              value={formState.city}
              onChange={handleChange}
              className="mt-1 rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
              placeholder="City"
              required
            />
          </div>
          <div className="flex w-[33.33%] flex-1 flex-col">
            <input
              id="state"
              name="state"
              type="text"
              value={formState.state}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
              placeholder="State"
              required
            />
          </div>
          <div className="flex w-[33.33%] flex-1 flex-col">
            <input
              id="zip"
              name="zip"
              type="text"
              value={formState.zip}
              onChange={handleChange}
              className="mt-1 rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
              placeholder="ZIP code"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <input
            id="phone"
            name="phone"
            type="text"
            value={formState.phone}
            onChange={handleChange}
            className="mt-1 rounded-md border border-gray-300 p-2 text-gray-600 focus:border-gray-600 focus:ring-0"
            placeholder="Phone"
          />
        </div>
      </form>
    </div>
  )
}

export default DeliveryForm
