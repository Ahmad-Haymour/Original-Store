const {default: axios} = require('axios')

const apiKey=process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl='https://original-store.onrender.com/api'

const axiosClient =axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
})

export default axiosClient;
