<template>
  <div id="app">
    <div class="content">
      <div class="navigation">
        <div class="nav__item">CART</div>
        <div class="nav__item">PRODUCTS</div>
        <div class="nav__item">INFO</div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>

import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  computed: {
  }
}
</script>



<style scoped>
  .content {
    display:flex;
    flex-direction:row;
    gap: 50px;
    margin-top: 20px;
  }

  .navigation {
    margin-left: 10px;
  }

  .nav__item {
    margin-bottom: 10px;
  }
</style>
