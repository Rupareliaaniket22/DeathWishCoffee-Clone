import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useQueryClient } from '@tanstack/react-query'
import { useUpdateQuantity } from './updateQuantity' // Ensure you have this hook implemented
import { useRemoveFromCart } from './RemoveFromCart' // This hook is provided in your initial setup

function CartItems({ product, refetchCart }) {
  console.log(product.quantity)
  const [quantity, setQuantity] = useState(product.quantity || 1)
  const queryClient = useQueryClient()
  const { mutate: updateQuantity } = useUpdateQuantity()
  const { mutate: removeFromCart } = useRemoveFromCart()

  const handleIncrease = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    updateQuantity(
      { id: product.id, quantity: newQuantity, refetch: refetchCart },
      {
        onSuccess: () => queryClient.invalidateQueries(['cartItems']),
        onError: (error) => console.error('Failed to update quantity:', error),
      }
    )
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      updateQuantity(
        { id: product.id, quantity: newQuantity },
        {
          onSuccess: () => queryClient.invalidateQueries(['cartItems']),
          onError: (error) =>
            console.error('Failed to update quantity:', error),
        }
      )
    }
  }

  const handleDelete = () => {
    removeFromCart(product.id, {
      onSuccess: () => queryClient.invalidateQueries(['cartItems']),
      onError: (error) => console.error('Failed to delete item:', error),
    })
  }

  useEffect(() => {
    setQuantity(product.quantity)
  }, [product])
  return (
    <div className="mt-3 flex w-full items-center gap-3">
      <img
        src={product.productimg}
        className="h-24 object-cover lg:w-24"
        alt={product.product_name}
      />
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <p className="font-[Revans] text-sm font-light underline md:text-lg">
            {product.product_name}
          </p>
          <div className="mt-2 flex items-center">
            <button
              className="p-1 text-sm"
              onClick={handleDecrease}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <RemoveIcon fontSize="small" />
            </button>
            <p className="mx-2 text-sm">{quantity}</p>
            <button
              className="p-1 text-sm"
              onClick={handleIncrease}
              aria-label="Increase quantity"
            >
              <AddIcon fontSize="small" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <button onClick={handleDelete} aria-label="Remove item from cart">
            <DeleteIcon className="text-right hover:text-red-600" />
          </button>
          <p className="mt-2 text-sm font-light">{product.product_price}</p>
        </div>
      </div>
    </div>
  )
}

export default CartItems
