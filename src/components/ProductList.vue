<template>
    <div>
        <div class="cards">
            <div 
                v-for="(product, index) in products"
                :key="index"
                class="card">
                <img class="card-img-top" :src="product.photo" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{product.model}}</h5>
                    <a href="" class="btn btn-primary">Order</a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters('products', 
            {
                products: 'products',
            })
        },
        methods: {
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
</style>