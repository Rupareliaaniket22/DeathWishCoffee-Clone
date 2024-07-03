import About from './About'
import Account from './Account'
import Blog from './Blog'
import Coffee from './Coffee'
import DropdownMenu from './DropdownMenu'
import FindInStore from './FindInStore'
import Merch from './Merch'
import NavLogo from './NavLogo'
import OfferNav from './OfferNav'
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import SubscribeandShare from './SubscribeandShare'

function NavLayout({ type }) {
  return (
    <div className="sticky top-0 z-10 w-screen ">
      <OfferNav />
      <div className="z-20 flex h-20 w-screen items-center justify-between   bg-black font-black uppercase text-white largelaptop:text-2xl  ">
        <DropdownMenu />
        <div className=" flex h-full w-[48%] items-center justify-between px-12">
          <Coffee />
          <SubscribeandShare />
          <Merch />
        </div>
        <NavLogo />
        <div className="flex h-full w-1/2 items-center justify-between pl-[4.3rem]">
          <div className="flex size-full items-center justify-between ">
            <FindInStore />
            <Blog />
            <About />
          </div>

          <div className="flex h-full  items-center gap-2 p-3 lg:pr-10">
            <Account />
            <SearchBar type={type} />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavLayout
