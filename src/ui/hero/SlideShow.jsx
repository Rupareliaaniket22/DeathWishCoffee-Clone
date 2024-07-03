import { useContext, useEffect, useRef, useState } from 'react'
import { MyContext } from '../../Context/Data'
import Slider from 'react-slick'
import SlideText from './SlideText'
import { NextArrow, Pause, PrevArrow } from './SlideNavigationBar'
import SlideInComponent from '../SlideInComponent'
import Loader from '../Loader'

export default function SlideShow({ reviews }) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768)
  const sliderRef = useRef(null)
  const [slideIndex, setSlideIndex] = useState(1)

  const settings = {
    autoplay: true,
    infinite: true,
    nextArrow: null,
    cssEase: 'ease-in-out',
    beforeChange: (current, next) => setSlideIndex(next + 1),
  }

  const {
    homeslidebgSmallScreenImages: smallScreenImages,
    homeslidebglargeScreenImages: largeScreenImages,
  } = useContext(MyContext)

  const images = isLargeScreen ? largeScreenImages : smallScreenImages

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!images)
    return (
      <div className="w-screen text-center">
        <Loader />
      </div>
    )

  const renderSlide = (item, index) => (
    <div
      key={index}
      className="mt-2 flex h-full w-screen flex-col items-center justify-center p-3 text-center text-white"
    >
      <h1 className="font-['Revans'] text-3xl font-black">{item.heading}</h1>
      <h3 className="m-auto mt-2 text-xl font-bold lg:w-1/2">{item.body}</h3>
      <p className="mt-2 font-black">{item.name}</p>
    </div>
  )

  return (
    <>
      <div className="mt-0 overflow-x-hidden overflow-y-scroll bg-black">
        <Slider ref={sliderRef} {...settings}>
          {reviews
            ? reviews.map((review, index) => renderSlide(review, index))
            : images.map((image, index) => (
                <div key={index} className="">
                  <img src={image.bg} className="" alt={`Slide ${index + 1}`} />
                </div>
              ))}
        </Slider>
        {!reviews && <SlideText currentslide={slideIndex - 1} />}
      </div>
      <div className="flex size-full items-center justify-center bg-black font-light text-white">
        <div className="mt-5 flex gap-5 border-b-0 md:border-r-2 md:border-stone-200 md:pr-4">
          <PrevArrow sliderRef={sliderRef} />
          <p className="flex items-center justify-center text-[1rem]">
            {slideIndex} / {images.length}
          </p>
          <NextArrow sliderRef={sliderRef} />
        </div>
        <Pause sliderRef={sliderRef} />
      </div>
    </>
  )
}
