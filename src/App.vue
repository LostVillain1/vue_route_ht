
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

// import ProductList from './components/ProductList.vue'
// import Cart from './components/Cart.vue'

export default {
  name: 'App',
  computed: {
    menuList() {
      return this.$store.getters['menu/items']
    }
  }
}
</script>



<style>
</style>
