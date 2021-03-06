import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/detail/:bookId/:index/:link',
            name: 'Detail',
            component: () => import(/* webpackChunkName: "Detail" */ './views/Detail.vue')
        },
        {
            path: '/user',
            name: 'User',
            component: () => import(/* webpackChunkName: "User" */ './views/User.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import(/* webpackChunkName: "Login" */ './views/Login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import(/* webpackChunkName: "Register" */ './views/Register.vue')
        },
        {
            path: '/bookInfo/:id',
            name: 'BookInfo',
            component: () => import(/* webpackChunkName: "BookInfo" */ './views/BookInfo.vue')
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import(/* webpackChunkName: "Admin" */ './views/Admin.vue')
        },
        {
            path: '/admin/login',
            name: 'AdminLogin',
            component: () => import(/* webpackChunkName: "Admin" */ './views/AdminLogin.vue')
        },
    ]
})
