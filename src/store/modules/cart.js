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
        addProduct(state, id_product) {
            state.products.push(id_product);
        },
        removeProduct(state, id_product) {

            state.products.p
        }
    },
    actions: {
        add(store, id_product) { // Асинхронное действие, чтобы корзину еще и на сервер отправлять
            store.commit('add', id_product)
        }
    }
}