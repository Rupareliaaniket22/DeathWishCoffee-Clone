import { queryClient } from './reactQueryClient' // Import queryClient instance
import { fetchCart } from './cartService'

// Define a function to add a product to the cart
export const AddToCart = async (selectedProductId, products) => {
  // Fetch current cart items
  const cart = await fetchCart()

  const selectedProduct = products.find(
    (product) => Number(product.id) === Number(selectedProductId)
  )

  if (!selectedProduct) {
    console.error('Selected product not found')
    return null
  }

  // Check if the product is already in the cart
  const existingCartItem = cart.find(
    (product) => Number(product.id) === Number(selectedProductId)
  )

  if (existingCartItem) {
    // If product is in the cart, update the quantity
    try {
      const response = await fetch(
        `http://localhost:3000/Cart/${selectedProductId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            quantity: existingCartItem.quantity + 1, // Increment quantity
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to update product quantity')
      }

      const updatedItem = await response.json()
      console.log('Product quantity updated in the cart:', updatedItem)
      return updatedItem
    } catch (error) {
      console.error('Error updating product quantity:', error)
      return null
    }
  } else {
    // If product is not in the cart, add it
    try {
      const response = await fetch('http://localhost:3000/Cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...selectedProduct, quantity: 1 }),
      })

      if (!response.ok) {
        throw new Error('Failed to add product to cart')
      }

      const newItem = await response.json()
      console.log('Product added to cart:', newItem)
      return newItem
    } catch (error) {
      console.error('Error adding product to cart:', error)
      return null
    } finally {
      // Invalidate the cart query to refresh data
      queryClient.invalidateQueries(['cartItems'])
    }
  }
}
