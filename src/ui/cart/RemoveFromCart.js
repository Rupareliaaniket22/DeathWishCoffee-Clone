import { useMutation, useQueryClient } from '@tanstack/react-query'

const deleteCartItem = async (id) => {
  const response = await fetch(`http://localhost:3000/Cart/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete item')
  }
}

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries(['cartItems'])
    },
  })
}
