<template>
  <div id="app">
    <div class="content">
      <div class="navigation">
        <div class="nav__item">
          <router-link to="/cart" tag="a">CART</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/products" tag="a">PRODUCTS</router-link>
        </div>
        <div class="nav__item">
          <router-link to="/products" tag="a">INFO</router-link>
        </div>
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

  a {
    text-decoration: none
  }
  .content {
    height: 100vh;
    display:flex;
    flex-direction:row;
    gap: 50px;
    margin-top: 20px;
  }

  .navigation {
    height: 100%;
    margin-left: 10px;
    padding-right: 20px;
    border-right: solid
  }

  .nav__item {
    margin-bottom: 10px;
  }
</style>
