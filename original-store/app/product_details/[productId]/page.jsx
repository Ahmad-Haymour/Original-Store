'use client'

import BreadCrumb from '@/app/_components/BreadCrumb'
import ProductApis from '@/app/_utils/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductBanner from './_components/ProductBanner'
import ProductInfo from './_components/ProductInfo'
import Loading from './Loading'

const productDetails = ({params}) => {

    const [ productDetails, setProductDetails ] = useState({})
    let [ isLoading, setIsLoading ] = useState(true)
    useEffect( () => {
            getProductById_()
    }, [params?.productId])

    const getProductById_ = () => {
        ProductApis.getProductById(params?.productId).then(res=>{
            console.log('Product Item: ', res.data.data)
            setTimeout(() => {
                setProductDetails(res?.data?.data)
                setIsLoading(false)
            }, 3000)
        })
    }

  return (
    <div>
        <BreadCrumb />
        <div className='flex justify-center flex-wrap gap-2 w-full bg-gray-200'>
            <div className='p-4 h-full lg:w-1/2 w-full lg:max-w-[580px]'>

                <div className='rounded text-black bg-white shadow-2xl my-4 p-4'>
                    <h5 className='text-sm'>Marke</h5>
                    <h2 className='text-xl font-extrabold'>Model</h2>
                    <p className='text-sm text-gray-600'>referenz nummer</p>
                </div>
                <ProductBanner product={productDetails} isLoading={isLoading} />

                <div className='text-black rounded my-4 p-4 bg-white shadow-2xl'>
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