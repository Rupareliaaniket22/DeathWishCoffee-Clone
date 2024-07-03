import { useState } from 'react'
import CheckBoxAndLabel from './CheckBoxAndLabel'
import InputField from './InputField'
import TextOffers from './TextOffers'

function Info() {
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div className="flex w-full flex-col items-end  ">
      <div className="mt-5 flex w-full justify-between px-5 py-2">
        <h3 className="text-xl font-bold">Contact</h3>
        <button className="text-sm font-normal underline ">Log In</button>
      </div>
      <form className="w-full px-5 py-2 " onSubmit={handleSubmit}>
        <InputField
          fieldName={'Email'}
          variable={email}
          setVariable={setEmail}
        />
        <CheckBoxAndLabel />
      </form>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-5 px-4 py-2 "
      >
        <TextOffers />
        <div className="flex gap-5">
          <InputField
            fieldName={'Mobile Phone(optional)'}
            variable={phoneNumber}
            setVariable={setPhoneNumber}
            type={'Phone number'}
          />
          <button className=" border-[0.5px] border-gray-400 px-2 text-sm font-bold">
            Subscribe
          </button>
        </div>
        <p className="text-sm">
          *By providing your phone number, you agree to receive recurring
          automated marketing text messages (e.g. cart reminders) from this shop
          and third parties acting on its behalf. Consent is not a condition to
          obtain goods or services. Msg & data rates may apply. Msg frequency
          varies. Reply HELP for help and STOP to cancel. You also agree to the
          Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  )
}

export default Info
