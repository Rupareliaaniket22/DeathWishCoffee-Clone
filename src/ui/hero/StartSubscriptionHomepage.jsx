import SlideInComponent from '../SlideInComponent'
import Buttons from './Buttons'

function StartSubscriptionHomepage() {
  return (
    <div className=" mt-5  flex flex-col justify-center text-white lg:h-auto ">
      <img
        src="./data/Subscription-Weblargescreen.jpg"
        alt="coffee image"
        className="lg:h-[35rem] lg:object-cover lg:object-center"
      />

      <div className="flex flex-col items-center justify-center gap-2 p-5 text-center lg:absolute lg:ml-10  lg:items-start lg:justify-start lg:text-left">
        <SlideInComponent className="flex w-full flex-col items-center justify-center ">
          <h3 className="text-xl font-extrabold lg:text-2xl lg:font-black">
            The Society of Strong Coffee
          </h3>
          <h1 className="font-['Revans'] text-4xl font-black lg:w-[50vw] lg:text-5xl">
            SAVE 30% OFF YOUR FIRST SHIPMENT
          </h1>
          <p className="font-light lg:w-1/2 lg:text-xl">
            Like a secret handshake, your status in the Society of Strong Coffee
            also earns you exclusive access to subscriber-only merch, events,
            forums, and so much more. Start a subscription today to start
            reaping the benefits.
          </p>
          <Buttons
            button="Start a Coffee Subscription"
            type="StartSubscription"
          />
        </SlideInComponent>
      </div>
    </div>
  )
}

export default StartSubscriptionHomepage
