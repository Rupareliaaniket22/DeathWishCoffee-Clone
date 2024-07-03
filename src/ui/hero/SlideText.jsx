import { useContext } from 'react'
import Buttons from './Buttons'
import { MyContext } from '../../Context/Data'
import SlideInComponent from '../SlideInComponent'
import Loader from '../Loader'

function SlideText({ currentslide }) {
  const { SlideText: data } = useContext(MyContext)

  if (!data) return <Loader />
  return (
    <SlideInComponent>
      <div className="flex size-full flex-col items-center justify-center gap-2 px-7 py-10 pl-4 text-white md:absolute md:top-[8%] md:ml-4 md:h-1/2 md:w-3/5 lg:top-[18%] lg:w-[50%]">
        <h1 className="w-full text-center font-['Revans'] text-3xl font-extrabold md:text-left md:text-4xl xl:text-6xl">
          {data[currentslide].title}
        </h1>
        <h4 className="w-[95%] text-center text-base font-light tracking-wide md:w-full md:justify-start md:text-left lg:font-semibold xl:text-xl">
          {data[currentslide].content}
        </h4>
        <div className="flex w-4/5 flex-col items-center justify-center gap-2 text-[1rem] md:w-full md:flex-row md:justify-start md:text-[1rem] lg:w-full">
          {data[currentslide].button.map((button, index) => (
            <Buttons button={button} key={index} />
          ))}
        </div>
      </div>
    </SlideInComponent>
  )
}

export default SlideText
