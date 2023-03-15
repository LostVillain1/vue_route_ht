
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>

import ProductList from './components/ProductList.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ProductList,
    // eslint-disable-next-line vue/no-unused-components
    Cart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
