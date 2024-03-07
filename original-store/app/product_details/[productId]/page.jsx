'use client'

import BreadCrumb from '@/app/_components/BreadCrumb'
import ProductApis from '@/app/_utils/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductBanner from './_components/ProductBanner'
import ProductInfo from './_components/ProductInfo'

const productDetails = ({params}) => {

    const [ productDetails, setProductDetails ] = useState({})
    useEffect( () => {
        setTimeout(() => {
            getProductById_()
        }, 3000)
    }, [params?.productId])

    const getProductById_ = () => {
        ProductApis.getProductById(params?.productId).then(res=>{
            console.log('Product Item: ', res.data.data)
            setProductDetails(res.data.data)
        })
    }

  return (
    <div>
        <BreadCrumb />
        <div className='flex flex-wrap gap-2 w-full bg-white'>
            <div className='p-4 h-full lg:w-1/2 w-full'>

                <div className='rounded text-black shadow-xl my-5 p-4'>
                    <h5>Marke</h5>
                    <h2>Model</h2>
                    <p>referenz nummer</p>
                </div>
                <ProductBanner product={productDetails} />

                <div>
                    Beschreibung & Eigenschaften
                </div>
                {/* <div>
                    Ähnliche produkte
                    Mehr von Nike..
                    Weitere Produkte von <span className='underline'>Marke</span>
                </div> */}
            </div>
            <ProductInfo product={productDetails} />
        </div>
    </div>
  )
}

export default productDetails