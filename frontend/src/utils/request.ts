import axios from 'axios'
import { createDiscreteApi } from 'naive-ui'
import router from '../router'

const { message } = createDiscreteApi(['message'])

const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['satoken'] = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        if (response.config.responseType === 'blob') {
            return response.data
        }
        const res = response.data
        if (res.code !== 200) {
            message.error(res.msg || 'Error')
            if (res.code === 401) {
                // re-login
                localStorage.removeItem('token')
                // window.location.reload() // Disable reload for debugging
                console.error('401 Unauthorized - Token invalid')
                message.error('登录已过期，请重新登录')
                router.push('/login') // Redirect to login instead of reload
            }
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res.data
        }
    },
    error => {
        message.error(error.message)
        return Promise.reject(error)
    }
)

export default service
