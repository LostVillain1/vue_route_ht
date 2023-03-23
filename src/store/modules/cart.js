export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        products(state) {
            return state.products
        }
    },
    mutations: {
        add(state, id_product) {
            state.products.push(id_product);
        }
    },
    actions: {
        add(store, id_product) { // Асинхронное действие, чтобы корзину еще и на сервер отправлять
            store.commit('add', id_product)
        }
    }
}