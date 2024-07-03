import { useState } from 'react'
import classNames from 'classnames'

function Sizes({ product }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-row items-center gap-5 font-light uppercase">
      {product.product_description.Size.map((size, index) => (
        <div
          onClick={() => setSelected(index)}
          key={index}
          className={classNames(
            'flex h-8 w-14 items-center justify-center border-[0.5px] border-gray-500 text-base hover:border-white',
            {
              'bg-white text-black': index === selected,
              'text-white': index !== selected,
            }
          )}
        >
          {size}
        </div>
      ))}
    </div>
  )
}

export default Sizes
