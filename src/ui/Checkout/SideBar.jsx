import { useState } from 'react'
import DeliveryForm from './DeliveryForm'
import ExpressCheckout from './ExpressCheckout'
import Info from './Info'
import PaymentForm from './PaymentForm'

function SideBar() {
  return (
    <div className="flex w-screen flex-col items-end overflow-y-scroll border-r-[0.5px]  border-gray-500 pr-3 xl:w-1/2">
      <div className="w-full py-7 xl:w-[70%] ">
        <ExpressCheckout />
        <Info />
        <DeliveryForm />
        <PaymentForm />
      </div>
    </div>
  )
}

export default SideBar
