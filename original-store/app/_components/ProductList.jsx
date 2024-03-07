import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({productList}) => {
  return (
    <div className='w-full grid place-items-center grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-10 gap-2 sm:gap-3'>
        {productList.map(item=>(
            <ProductItem product={item} key={item.id} className='hover:shadow-2xl' />
        ))}
    </div>
  )
}

export default ProductList