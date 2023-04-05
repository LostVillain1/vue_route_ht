<template>
    <div class="card">
        <img class="card-img-top" :src="product.photo"  alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{product.model}}</h5>
            <div class="card__buttons">{{product.price}} рублей </div>            
        </div>
    </div>
</template>
<script>



export default {
  name: 'Product',
  props: ['id'],
  computed: {
    product() {
        return this.$store.getters['products/product'](this.id)
    }, 
  },
  watch: {
    productId() {
        console.log(typeof(this.productId))
    }
  }
}


</script>

<style scoped>

.card-img-top{
        height: 200px;
    }
.card {
    
    width: 18rem
}

</style>