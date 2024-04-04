'use client'

import React, { useEffect, useState } from 'react'
import ProductList from '../_components/ProductList'
import ProductApis from '../_utils/ProductApis'
import ProductModels from '../_components/ProductModels'

const Products = () => {
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
    <div className='bg-gray-700 lg:flex py-16 sm:px-4'>
        <ProductModels  productList={productList} />
        <ProductList productList={productList} />
    </div>
  )
}

export default Products