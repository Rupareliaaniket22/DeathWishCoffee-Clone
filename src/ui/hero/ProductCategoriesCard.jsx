import Slider from 'react-slick'
import { NextArrow, PrevArrow } from './ProductSlide'
import { useRef } from 'react'
import SlideInComponent from '../SlideInComponent'
import { Navigate, useNavigate } from 'react-router'

export default function SingleSlideShow({ type, Categories }) {
  const sliderRef = useRef(null)
  const navigate = useNavigate()
  const style =
    type !== 'ProductPageImg'
      ? 'h-full w-full transition-all duration-300 ease-in lg:px-2 hover:scale-[1.02]'
      : 'size-[8rem] m-auto md:size-[11rem] lg:size-[13rem]'

  const settings = {
    nextArrow: <NextArrow sliderRef={sliderRef} display="hidden" />,
    prevArrow: <PrevArrow sliderRef={sliderRef} display="hidden" />,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if (!Categories)
    return <h1 className="text-center text-white">Loading....</h1>

  return (
    <div className="mt-3">
      <Slider
        {...settings}
        ref={sliderRef}
        className="flex w-screen items-center justify-center text-red-600"
      >
        {Categories.map((category, index) => (
          <div
            key={index}
            className="flex w-screen flex-col items-center justify-center overflow-hidden lg:p-4"
          >
            <SlideInComponent>
              <div
                onClick={() => {
                  navigate(`/productlist/:${category.text}`)
                }}
              >
                <img src={category.bg} alt="bg" className={style} />
                {type === 'ProductPageImg' ? (
                  <h1 className="mt-2 w-full text-center font-['Revans'] text-2xl font-bold text-white lg:text-3xl">
                    {category.text}
                  </h1>
                ) : (
                  <h1 className="relative -top-10 w-full text-center text-2xl font-bold text-white lg:text-3xl">
                    {category.text}
                  </h1>
                )}
              </div>
            </SlideInComponent>
          </div>
        ))}
      </Slider>
    </div>
  )
}
