import styles from './Footer.module.css'
function Footer() {
  return (
    <>
      <footer className=" flex flex-col flex-wrap items-center justify-center gap-4 text-center text-white md:flex md:flex-row">
        <img
          src="/public/logo.jpg"
          className="h-auto w-28 md:w-32 lg:w-36"
        ></img>
        <h1 className="w-full font-['Revans'] text-2xl font-black uppercase text-red-600 md:hidden">
          End of the Road, JACK
        </h1>
        <div className="flex  flex-wrap justify-between gap-2 text-left text-sm md:text-base lg:text-lg">
          <ul className="flex flex-col gap-2 p-3  ">
            <h3 className="py-2 font-black uppercase">Company</h3>
            <li>Help+FAQ</li>
            <li>Refund Policy</li>
            <li>Carrers</li>
            <li>Wholesale</li>
          </ul>

          <ul className="flex flex-col gap-2 p-3">
            <h3 className="py-2 font-black uppercase">Accounts + Orders</h3>
            <li>Your Account</li>
            <li>Shipping + Delivery</li>
            <li>Subscription</li>
            <li>Track Your Order</li>
          </ul>

          <ul className="flex flex-col gap-2 p-3">
            <h3 className="py-2 font-black uppercase">Legal</h3>
            <li>Terms+Conditions</li>
            <li>Privacy Policy</li>
            <li>PROP 65</li>
          </ul>
          <h3 className=" p-4 font-black">Get Wired With us</h3>
        </div>
      </footer>
      <h3 className="p-3 text-center text-sm text-white">
        © 2024, Death Wish Coffee Company. All rights reserved.
      </h3>
    </>
  )
}

export default Footer
