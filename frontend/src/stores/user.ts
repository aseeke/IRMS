import { defineStore } from 'pinia'
import request from '../utils/request'

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        userInfo: null
    }),
    actions: {
        async login(userInfo: any) {
            const res: any = await request.post('/auth/login', userInfo)
            this.token = res.tokenValue
            localStorage.setItem('token', this.token)
            await this.getUserInfo()
        },
        async getUserInfo() {
            const res: any = await request.get('/auth/info')
            this.userInfo = res
        },
        logout() {
            this.token = ''
            this.userInfo = null
            localStorage.removeItem('token')
            request.post('/auth/logout')
        }
    }
})
