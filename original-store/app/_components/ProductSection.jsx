'use client'

import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'

const ProductSection = () => {
    const [productList, setProductList] = useState([])
    useEffect(()=>{
        getLatestProducts_();
    }, [])

    const getLatestProducts_=()=>{
        ProductApis.getLatestProducts().then(res=>{
            console.log(res.data)
            setProductList(res.data.data)
        })
    }
  return (
    <div className='px-10 md:px-20 bg-white'>
        <ProductList productList={productList} />
    </div>
  )
}

export default ProductSection