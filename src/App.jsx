import Data, { MyContext } from './Context/Data'
import AppLayout from './ui/AppLayout'
import { createBrowserRouter } from 'react-router-dom'
import NavLayout from './ui/nav/NavLayout'
import { RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense, lazy } from 'react'
import Loader from './ui/Loader'
import SamplePage from './ui/pages/SamplePage'

const ProductPage = lazy(() => import('./ui/pages/ProductPage'))
const Login = lazy(() => import('./ui/pages/Login'))
const Signup = lazy(() => import('./ui/pages/Signup'))
const CheckoutPage = lazy(() => import('./ui/pages/CheckOutPage'))
const OrderPlacedPage = lazy(() => import('./ui/pages/orderPlacedPage'))
const DifferentProductsPage = lazy(
  () => import('./ui/pages/DifferentProductsPage')
)

const queryClient = new QueryClient()
const router = createBrowserRouter([
  { path: '/', element: <AppLayout /> },
  { path: '/product/:id', element: <ProductPage /> },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Signup',
    element: <Signup />,
  },
  {
    path: '/productlist/:Type',
    element: <DifferentProductsPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '/OrderPlaced',
    element: <OrderPlacedPage />,
  },
  {
    path: '/SamplePage',
    element: <SamplePage />,
  },
])
function App() {
  return (
    <Data>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </Data>
  )
}

export default App
