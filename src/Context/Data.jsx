import { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

function Data({ children }) {
  const [formState, setFormState] = useState({
    country: 'United States',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  })
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    cardName: '',
    useShippingAddress: false,
    rememberMe: false,
    country: 'United States',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    paymentMethod: 'creditCard', // Default to creditCard
  })

  const [homeslidebgSmallScreenImages, setHomeslidebgSmallScreenImages] =
    useState()
  const [homeslidebglargeScreenImages, setHomeslidebglargeScreenImages] =
    useState()
  const [useShippingAddress, setUseShippingAddress] = useState(false)
  const [SlideText, setSlideText] = useState()
  const [isShoppingCartClicked, setIsShoppingCartClicked] = useState(false)
  const [products, setProducts] = useState()
  const [Categories, SetCategories] = useState()
  const [reviews, setReviews] = useState()
  const [suggestion, setSuggestion] = useState([])
  const [search, setSearch] = useState('')
  const [isEntered, setIsEntered] = useState(false)
  const [isCoffeeChecked, setIsCoffeeChecked] = useState(false)
  const [isBundlesChecked, setIsBundlesChecked] = useState(false)
  const [isMerchChecked, setIsMerchChecked] = useState(false)
  const [sortBy, setSortBy] = useState()
  const [isItemAdded, setIsItemAdded] = useState(false)
  const [orderDetails, setOrderDetails] = useState()
  useEffect(() => {
    async function getData() {
      const smallscreenbgres = await fetch(
        'http://localhost:3000/smallScreenImages'
      )
      const productsres = await fetch('http://localhost:3000/products')
      const largescreenbgres = await fetch(
        'http://localhost:3000/largeScreenImages'
      )
      const reviewsres = await fetch('http://localhost:3000/reviews')
      const Categoriesres = await fetch('http://localhost:3000/category')
      const slidetextres = await fetch('http://localhost:3000/text')
      const reviewsData = await reviewsres.json()
      const productsdata = await productsres.json()

      const smallScreenImagesData = await smallscreenbgres.json()
      const CategoriesData = await Categoriesres.json()
      const largeScreenImagesData = await largescreenbgres.json()
      const slideTextData = await slidetextres.json()

      setReviews(reviewsData)
      setHomeslidebgSmallScreenImages(smallScreenImagesData)
      setHomeslidebglargeScreenImages(largeScreenImagesData)
      setSlideText(slideTextData)
      SetCategories(CategoriesData)
      setProducts(productsdata)
    }

    getData()
  }, [])

  return (
    <MyContext.Provider
      value={{
        homeslidebgSmallScreenImages,
        homeslidebglargeScreenImages,
        products,
        SlideText,
        Categories,
        reviews,
        suggestion,
        setSuggestion,
        isShoppingCartClicked,
        setIsShoppingCartClicked,
        setSearch,
        search,
        isEntered,
        setIsEntered,
        isBundlesChecked,
        isCoffeeChecked,
        isMerchChecked,
        setIsBundlesChecked,
        setIsCoffeeChecked,
        setIsMerchChecked,
        setSortBy,
        sortBy,
        isItemAdded,
        setIsItemAdded,
        formState,
        setFormState,
        paymentForm,
        setPaymentForm,
        useShippingAddress,
        setUseShippingAddress,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default Data
