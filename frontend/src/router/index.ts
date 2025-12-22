import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/',
        component: () => import('../views/Dashboard.vue'),
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'DashboardHome',
                component: () => import('../views/home/DashboardHome.vue')
            },
            {
                path: 'device/list',
                name: 'DeviceList',
                component: () => import('../views/device/DeviceList.vue')
            },
            {
                path: '/system/user',
                name: 'UserList',
                component: () => import('../views/system/UserList.vue')
            },
            {
                path: '/system/dept',
                name: 'DeptList',
                component: () => import('../views/system/DeptList.vue')
            },
            {
                path: '/system/office',
                name: 'OfficeList',
                component: () => import('../views/system/OfficeList.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.path !== '/login' && !token) {
        next('/login')
    } else {
        next()
    }
})

export default router
