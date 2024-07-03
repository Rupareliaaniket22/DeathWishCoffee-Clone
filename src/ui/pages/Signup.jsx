import { useState } from 'react'
import NavLayout from '../nav/NavLayout'
import Footer from '../hero/Footer'
import { Link } from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ firstName, lastName, email, password })
  }

  return (
    <>
      <NavLayout />
      <div className="mb-10 mt-12 flex flex-col items-center justify-center">
        <h1 className="text-center font-[Revans] text-5xl text-white">
          Create Account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex w-full max-w-md flex-col items-center justify-center"
        >
          <div className="group relative z-0 mb-5 w-4/5 bg-white lg:w-full">
            <input
              type="text"
              name="floating_First_Name"
              id="floating_First_Name"
              className={`${firstName ? 'mt-3' : 'mt-0'} peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 pl-5 text-base text-gray-900 focus:mt-3 focus:outline-none peer-focus:top-7`}
              placeholder=" "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label
              htmlFor="floating_First_Name"
              className={`absolute top-3 pl-2 text-sm text-gray-500 duration-300 peer-focus:top-1 peer-focus:scale-75 ${firstName && 'top-1 scale-75'}`}
            >
              First Name
            </label>
          </div>
          <div className="group relative z-0 mb-5 w-4/5 bg-white lg:w-full">
            <input
              type="text"
              name="floating_Last_Name"
              id="floating_Last_Name"
              className={`${lastName ? 'mt-3' : 'mt-0'} peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 pl-5 text-base text-gray-900 focus:mt-3 focus:outline-none peer-focus:top-7`}
              placeholder=" "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label
              htmlFor="floating_Last_Name"
              className={`absolute top-3 pl-2 text-sm text-gray-500 duration-300 peer-focus:top-1 peer-focus:scale-75 ${lastName && 'top-1 scale-75'}`}
            >
              Last Name
            </label>
          </div>
          <div className="group relative z-0 mb-5 w-4/5 bg-white lg:w-full">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className={`${email ? 'mt-3' : 'mt-0'} peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 pl-5 text-base text-gray-900 focus:mt-3 focus:outline-none peer-focus:top-7`}
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="floating_email"
              className={`absolute top-3 pl-2 text-sm text-gray-500 duration-300 peer-focus:top-1 peer-focus:scale-75 ${email && 'top-1 scale-75'}`}
            >
              Email address
            </label>
          </div>
          <div className="group relative z-0 mb-1 w-4/5 bg-white lg:w-full">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className={`${password ? 'mt-3' : 'mt-0'} peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 pl-5 text-base text-gray-900 focus:mt-3 focus:outline-none focus:ring-0 peer-focus:top-7`}
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="floating_password"
              className={`absolute top-3 pl-2 text-sm text-gray-500 duration-300 peer-focus:top-1 peer-focus:scale-75 ${password && 'top-1 scale-75'}`}
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 bg-red-600 p-5 px-7 py-2.5 text-center text-lg font-light text-white focus:outline-none"
          >
            Create
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Signup
