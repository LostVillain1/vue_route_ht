<template>
  <div class="cart">
    <h1>Корзина</h1>
    <h2>У вас в корзине сейчас следующие товары:</h2>
    <div v-if="cartIsEmpty">В корзине пока что ничего нет</div>
    <div v-else>
      <div 
        v-for="(product, index) in productsInCart"
        :key=index
        class="card">
        <img class="card-img-top" :src="product.photo" alt="Card image cap">
        <div class="card-body">
          <router-link :to="{ name: 'product', params: { id: product.id } }"><h5 class="card-title">{{product.model}}</h5></router-link>
          <div>В количестве: {{amountOfConcreteProd(product.id)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  props: {
    msg: String
  },
  computed: {
    ...mapGetters('cart', 
    {
        amountOfUniqueProducts: 'amountOfUniqueProducts',
    }),
    cartIsEmpty() {
      return Object.keys(this.amountOfUniqueProducts).length === 0;
    },
    productsInCart() {
      const products = []
      for (let key in this.amountOfUniqueProducts) {
        products.push(this.$store.getters['products/product'](key))
      }
      return products
    },
  },
  methods: {
    amountOfConcreteProd(id) {
      return this.amountOfUniqueProducts[id]
    }
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

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
