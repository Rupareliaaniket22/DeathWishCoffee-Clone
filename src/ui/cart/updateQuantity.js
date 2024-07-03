import { useMutation } from '@tanstack/react-query'
import { queryClient } from './reactQueryClient'

const updateQuantity = async ({ id, quantity }) => {
  const response = await fetch(`http://localhost:3000/Cart/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quantity,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to update quantity')
  }

  return await response.json()
}

export const useUpdateQuantity = () => {
  return useMutation({
    mutationFn: updateQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries(['cartItems'])
    },
  })
}
