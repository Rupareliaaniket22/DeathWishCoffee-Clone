import { useState } from 'react'
import NavLayout from '../nav/NavLayout'
import Footer from '../hero/Footer'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <NavLayout />
      <div className="mb-10 mt-12 flex flex-col items-center justify-center ">
        <h1 className=" text-center font-[Revans] text-5xl text-white">
          Login
        </h1>
        <form
          onClick={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex w-full  max-w-md flex-col items-center justify-center"
        >
          <div className="group relative z-0 mb-5 w-4/5 bg-white lg:w-full">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className={`${email ? 'mt-3  ' : 'mt-0 '} peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 pl-5 text-base text-gray-900 focus:mt-3  focus:outline-none  peer-focus:top-7`}
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
              name="floating_email"
              id="floating_email"
              className={`${password ? 'mt-3  ' : 'mt-0 '} peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 pl-5 text-base text-gray-900 focus:mt-3  focus:outline-none focus:ring-0 peer-focus:top-7`}
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
          <p className="mb-5 mt-1 w-4/5 text-left font-semibold  text-gray-200 underline lg:w-full">
            Forgot your Password?
          </p>
          <button
            type="submit"
            className="bg-red-600 p-5  py-2.5 text-center text-lg font-light  text-white focus:outline-none "
          >
            Sign In
          </button>
          <Link to="/Signup">
            <p className="mt-4 text-center  text-sm font-semibold  text-gray-200 underline lg:w-full">
              Create account
            </p>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login
