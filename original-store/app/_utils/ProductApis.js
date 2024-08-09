const {default: axiosClient} = require('./axiosClient')

// const getLatestProducts = () => axiosClient.get('/products?populate=*&pagination[limit]=-1')
const getLatestProducts = () => axiosClient.get('/products?populate=*&pagination[limit]=100')
  .then(response => console.log(response))
  .catch(error => console.error(error))
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`)

export default {
    getLatestProducts,
    getProductById
}