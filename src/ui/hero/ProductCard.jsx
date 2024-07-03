import * as React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Buttons from './Buttons'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
function ProductCard({ product, type }) {
  return (
    <div className="group mt-5 flex flex-col  justify-center gap-1   text-white">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.productimg}
          alt="product image"
          className="transition-all duration-300 ease-in lg:group-hover:scale-[1.02]"
        />
        <div className="flex h-[5rem] w-full flex-col justify-between ">
          <p className="w-full text-sm font-extrabold hover:text-red-600 hover:underline hover:decoration-solid">
            {product.product_name}
          </p>
          <p className=" font-light">{product.product_price}</p>
          <BasicRating
            rating={product.product_ratings}
            Ratedby={product.Ratedby}
          />
        </div>
      </Link>
      <div className="mt-3 group-hover:block">
        <Buttons
          button={product.button}
          type="New Arrivals"
          selectedProduct={product}
        >
          <ShoppingCartIcon fontSize="initial" />
        </Buttons>
      </div>
    </div>
  )
}

export default ProductCard

export function BasicRating({ rating, Ratedby }) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        '& .MuiRating-iconFilled': {
          color: '#fff',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center',
        },
      }}
      className="text-white"
    >
      <div className="flex items-center">
        <Rating name="read-only" precision={0.5} value={rating} readOnly />
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'top',
            paddingBottom: 0.3,
            paddingLeft: 0.7,
            paddingRight: 0.4,
          }}
        >
          {rating}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'top',
            paddingBottom: 0.3,
          }}
        >
          ({Ratedby})
        </Typography>
      </div>
    </Box>
  )
}
