import axios from 'axios';
const instance = axios.create({
    baseURL:"http://localhost:3001/api",
    timeout:5000
})
instance.interceptors.request.use((config) => {
        return config
    },
    function (error) {
        return Promise.reject(error)
    })
instance.interceptors.response.use((res) => {
    return res.data
})
export default instance;
