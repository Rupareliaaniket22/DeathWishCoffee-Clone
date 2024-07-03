import { Link } from 'react-router-dom'

/* eslint-disable tailwindcss/classnames-order */
export default function DropDownContent() {
  return (
    <div className="absolute top-14 z-10 flex h-screen w-screen flex-col  bg-black pt-1  transition duration-150 ease-in-out  md:w-[50vw]">
      <ul className="flex  flex-col gap-5  p-3  text-left text-lg uppercase md:text-xl ">
        <div>
          <Link to="/productlist/:coffee">
            <li className="border-y  border-customGray p-3 text-xl font-extrabold">
              Coffee
            </li>
          </Link>

          <Link to="/productlist/:merch">
            <li className="border-b  border-customGray  p-3 text-xl font-extrabold">
              Merch
            </li>
          </Link>
        </div>

        <li>Society of Strong Coffee</li>
        <li>Ritiual Rewards</li>
        <li>Find In Store</li>
        <li>Blog & Content</li>
        <li>About</li>
        <li>Help & FAQS</li>
        <li>Account</li>
      </ul>
    </div>
  )
}
