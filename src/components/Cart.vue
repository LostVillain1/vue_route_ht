<template>
  <div class="cart">
    <h1>Корзина</h1>
    <h2>У вас в корзине сейчас следующие товары:</h2>
    {{ amountOfUniqueProducts }}
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
    })
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
