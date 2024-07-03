import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRef, useEffect } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import SlideInComponent from '../SlideInComponent'
import Loader from '../Loader'

function ProductSlide({ Name, data }) {
  const sliderRef = useRef(null)

  const settings = {
    nextArrow: <NextArrow sliderRef={sliderRef} />,
    prevArrow: <PrevArrow sliderRef={sliderRef} />,
    slidesToShow: 5,
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

  if (!data)
    return <h1 className="w-screen text-center">Loading... {<Loader />}</h1>

  return (
    <SlideInComponent>
      <div className="mt-14 flex w-screen flex-col items-center justify-center">
        <h1 className="w-screen text-center font-['Revans'] text-3xl font-extrabold text-white md:text-4xl xl:text-6xl">
          {Name}
        </h1>
        <Slider
          {...settings}
          ref={sliderRef}
          className="flex w-screen items-center justify-center"
        >
          {data.map((current, index) => {
            const shouldDisplay =
              (Name === 'New Arrivals' && current.isNewArrival) ||
              (Name === 'BEST SELLERS' && current.isBestSeller)
            return shouldDisplay ? (
              <ProductCard product={current} key={index} />
            ) : null
          })}
        </Slider>
      </div>
    </SlideInComponent>
  )
}

export function PrevArrow({ sliderRef, display }) {
  const design = `lg:${display} flex h-full items-center justify-center p-1 text-xl text-red-600`
  const handleClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  return (
    <button className={design} onClick={handleClick}>
      <ArrowBackIosNewIcon fontSize="medium" />
    </button>
  )
}

export function NextArrow({ sliderRef, display }) {
  const design = `lg:${display} flex h-full items-center justify-center p-1 text-xl text-red-600`
  const handleClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <button className={design} onClick={handleClick}>
      <ArrowForwardIosIcon fontSize="medium" />
    </button>
  )
}

export default ProductSlide
