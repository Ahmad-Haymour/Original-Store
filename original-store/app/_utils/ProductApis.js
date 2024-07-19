const {default: axiosClient} = require('./axiosClient')

const getLatestProducts = () => axiosClient.get('/products?populate=*&pagination[limit]=-1')
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`)

export default {
    getLatestProducts,
    getProductById
}