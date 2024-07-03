import TopBar from '../Checkout/TopBar'
import SideBar from '../Checkout/SideBar'
import RightSideBar from '../Checkout/RightSideBar'

function CheckoutPage() {
  return (
    <div className="h-screen w-screen overflow-scroll  bg-white">
      <TopBar />
      <div className="flex h-screen w-screen  flex-col xl:flex-row">
        <SideBar />
        <RightSideBar />
      </div>
    </div>
  )
}

export default CheckoutPage
