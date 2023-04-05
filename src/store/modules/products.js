export default {
    namespaced: true,
    state: {
        products: [{
                id: 1,
                model: 'Iphone 12',
                price: 60000,
                photo: 'https://9to5mac.com/wp-content/uploads/sites/6/2021/09/iphone-13-pro-max-tidbits-9to5mac.jpg?quality=82&strip=all'
            },
            {
                id: 2,
                model: 'Iphone 13',
                price: 70000,
                photo: 'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iPhone-US-market-share.jpg?w=1500&quality=82&strip=all&ssl=1://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.giznext.com%2Fmobiles%2Fapple-iphone-12-gnt%2Fimages&psig=AOvVaw00VEkqrz4_TEs2VrG5jY9E&ust=1680271514238000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNiqrKfpg_4CFQAAAAAdAAAAABAE'
            },
            {
                id: 3,
                model: 'Iphone 14',
                price: 80000,
                photo: 'https://9to5mac.com/wp-content/uploads/sites/6/2023/03/Apple-iPhone-14-iPhone-14-Plus-yellow-dual-camera-system-230307_inline.jpg.large_2x-2.jpg'
            },
        ],
    },
    getters: {
        products(state) {
            return state.products
        },
        product: (state) => (id) => {
            const [product] = state.products.filter(product => product.id === +id);
            return product
        }
    },
    mutations: {

    },
    actions: {

    }
}