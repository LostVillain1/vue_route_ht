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
      <div class="products">
        <router-view />
        <div class="cart">
          <div class="cart__amount">
            {{ products }}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </div>      
      </div>    

    </div>
  </div>
</template>

<script>

// import ProductList from './components/ProductList.vue'
// import Cart from './components/Cart.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters('cart',
    {
      products: 'productsAmount'
    }
    )
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

  .products{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  
  .cart {
    position: relative;
  }
  .cart__amount {
    position: absolute;
    left: 20px;
    top: -15px;
  }
</style>
