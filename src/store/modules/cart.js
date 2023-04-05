export default {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        products(state) {
            return state.products
        },
        productsAmount(state) {
            return state.products.length
        },
        amountOfUniqueProducts(state) {
            const assocProducts = {};
            state.products.forEach(function(product) {
                assocProducts[product.id] = (assocProducts[product.id] || 0) + 1;
            });
            return assocProducts
        }
    },
    mutations: {
        addProduct(state, product) {
            state.products.push(product);
        },
        removeProduct(state, product) {
            const itemIndex = state.products.indexOf(product);
            if (itemIndex > -1) {
                state.products.splice(itemIndex, 1);
            }
        }
    },
    actions: {
        add(store, id_product) { // Асинхронное действие, чтобы корзину еще и на сервер отправлять
            store.commit('add', id_product)
        }
    }
}