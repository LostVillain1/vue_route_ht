<template>
    <div>
        <div class="cards">
            <div 
                v-for="(product, index) in products"
                :key="index"
                class="card">
                <img class="card-img-top" :src="product.photo" alt="Card image cap">
                <div class="card-body">
                    <router-link :to="{ name: 'product', params: { id: product.id } }"><h5 class="card-title">{{product.model}}</h5></router-link>
                    <div class="card__buttons">
                        <a href="" class="btn btn-primary"
                        @click.prevent="addProduct(product)">
                            Order
                        </a>
                        <button type="button"
                                class="btn btn-danger"
                                @click="removeProduct(product)">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapGetters('products', 
            {
                products: 'products',
            })
        },
        methods: {
            ...mapMutations('cart', 
            {
                addProduct: 'addProduct',
                removeProduct: 'removeProduct'
            })
        }
    }
</script>

<style scoped>

    .cards {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .card-img-top{
        height: 200px;
    }
    .card {
        
        width: 18rem
    }

    .card__buttons {
        display: flex;
        justify-content: space-between
    }
</style>