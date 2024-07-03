import React from 'react'

function ExpressCheckout() {
  return (
    <section
      className="mt-2 flex w-full flex-col items-end   px-7"
      aria-label="Express Checkout Options"
    >
      <div className="flex w-full flex-col items-center justify-center border-b-[0.5px] border-gray-500">
        <h2 className=" text-sm font-normal text-gray-500">Express Checkout</h2>
        <div className="flex w-full flex-col flex-wrap items-center  justify-center gap-6 border-gray-300  py-4 md:flex-row">
          <img
            src="ShopPay.png"
            alt="Shop Pay Logo"
            className=" w-52 rounded bg-[#390CEC] px-10 py-3 xl:w-36 xl:px-10 xl:py-[0.9rem]"
            loading="lazy"
          />
          <img
            src="https://www.paypalobjects.com/js-sdk-logos/2.2.7/paypal-blue.svg"
            alt="PayPal Logo"
            className="w-52 rounded bg-[#f3ba38] px-10 py-1 xl:w-36 xl:px-10 xl:py-3"
            loading="lazy"
          />
          <img
            src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg"
            alt="Google Pay Logo"
            className="w-[13rem] rounded bg-black px-16 py-2 xl:w-36 xl:px-10 xl:py-2"
            loading="lazy"
          />
        </div>
        <p className="relative  top-[0.65rem] z-30 m-auto bg-white px-3 text-sm  text-gray-600">
          OR
        </p>
      </div>
    </section>
  )
}

export default ExpressCheckout
