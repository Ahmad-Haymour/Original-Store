import ProductList from './_components/ProductList'
import ProductModels from './_components/ProductModels'

const Products = () => {
  
  return (
    <div className='bg-light-background dark:bg-dark-background lg:flex py-16 sm:px-4 min-h-[100vh]'>
        <ProductModels/>
        <ProductList/>
    </div>
  )
}

export default Products