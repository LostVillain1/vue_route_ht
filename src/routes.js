import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Product from './components/Product'

const routes = [{
        path: '', //main page
        component: ProductList
    },
    {
        path: '/products',
        name: 'products',
        component: ProductList
    },
    {
        path: '/products/:id',
        name: 'product',
        component: Product,
        props: true
    },
    {
        path: '/cart',
        name: 'cart',
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