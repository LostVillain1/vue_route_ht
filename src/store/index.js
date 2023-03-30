import Vue from 'vue';
import Vuex from 'vuex';

//Чтобы во вью появилась переменная store у каждого экземпляра нужно использовать функцию Vue.use()
// Функция говорит вью, что используется доп модуль, которые расширяет библиотеку вью, т.е доп модуль - Vuex    

Vue.use(Vuex);

// создаем хранилище 

import cart from './modules/cart'
import menu from './modules/menu'
import products from './modules/products'

export const store = new Vuex.Store({
    modules: {
        menu,
        cart,
        products
    }
})