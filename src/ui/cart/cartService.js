// cartService.js
export const fetchCart = async () => {
  const response = await fetch('http://localhost:3000/Cart')

  if (!response.ok) {
    throw new Error('Failed to fetch cart data')
  }

  const data = await response.json()
  return data
}
