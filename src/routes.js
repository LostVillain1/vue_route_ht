import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from './components/ProductList'
import Cart from './components/Cart'

const routes = [{
        path: '', //main page
        component: ProductList
    },
    {
        path: '/products',
        component: ProductList
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '*', //для всех роутов, которые не совпадают с перечнем выше(т.е ошибку выводить, например)
        component: Cart
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
})