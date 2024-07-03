import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { MyContext } from '../../Context/Data'
import { useUpdateQuantity } from '../cart/updateQuantity'
import { AddToCart } from '../cart/AddToCart'
import { useQueryClient } from '@tanstack/react-query'

function Buttons({ type, button, children, theme, selectedProduct }) {
  const { products, setIsShoppingCartClicked, setIsItemAdded } =
    useContext(MyContext)
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate: updateQuantity } = useUpdateQuantity()

  async function handleAddToCart() {
    const id = selectedProduct.id
    try {
      const addedItem = await AddToCart(id, products)
      if (addedItem && addedItem.id && addedItem.quantity) {
        updateQuantity({ id: addedItem.id, quantity: addedItem.quantity })
      }
    } catch (error) {
      console.error('Error handling add to cart:', error)
    }
    setIsShoppingCartClicked(true)
    setIsItemAdded(() => true)
    queryClient.invalidateQueries(['cartItems'])
  }

  function handleNavigation(buttonText) {
    const lowerCaseButton = buttonText.toLowerCase()
    if (
      lowerCaseButton === 'shop all merch' ||
      lowerCaseButton === 'shop handcrafted mugs' ||
      lowerCaseButton === 'shop now'
    ) {
      navigate('/productlist/:Merch')
    } else if (
      lowerCaseButton === 'shop all coffee' ||
      lowerCaseButton === 'shop almond afterlife'
    ) {
      navigate('/productlist/:Coffee')
    }
  }

  const buttonContent = (
    <>
      {button}
      {children}
    </>
  )

  if (type === 'New Arrivals') {
    return (
      <div
        className="flex w-full items-center justify-center gap-2 border-2 border-red-600 bg-red-600 p-1 text-center font-semibold hover:bg-black hover:transition-all hover:duration-300 lg:invisible lg:bg-black lg:group-hover:visible"
        onClick={handleAddToCart}
      >
        {buttonContent}
      </div>
    )
  }

  if (type === 'Checkout') {
    return (
      <div
        onClick={() => navigate('/checkout')}
        className="flex w-full items-center justify-center gap-2 bg-red-600 p-1 text-center text-xl font-semibold"
      >
        {buttonContent}
      </div>
    )
  }

  if (type === 'StartSubscription') {
    return (
      <div className="m-auto flex w-screen items-center justify-center gap-2 border-2 border-red-600 bg-red-600 p-1 text-center font-semibold hover:bg-black hover:transition-all hover:duration-300 md:w-1/2 lg:m-0 lg:text-xl">
        {buttonContent}
      </div>
    )
  }

  if (type === 'AddToCart') {
    const themeColor =
      theme === 'themegolden'
        ? '#AC6E39'
        : theme === 'themered'
          ? '#E12727'
          : theme === 'themepurple'
            ? '#7F5DC7'
            : ''
    return (
      <div
        className={`mb-3 flex w-full items-center bg-${theme} justify-center gap-2 p-1 text-center font-semibold text-white hover:bg-black hover:transition-all hover:duration-100 lg:text-xl`}
        style={{
          borderColor: themeColor,
          borderWidth: '2px',
        }}
        onClick={handleAddToCart}
      >
        {buttonContent}
      </div>
    )
  }

  return (
    <div
      className="flex w-full items-center justify-center gap-2 border-2 border-red-600 bg-red-600 p-1 text-center font-semibold hover:bg-black hover:transition-all hover:duration-300 md:w-1/2 md:text-[0.7rem] lg:text-[0.9rem]"
      onClick={() => handleNavigation(button)}
    >
      {buttonContent}
    </div>
  )
}

export default Buttons
