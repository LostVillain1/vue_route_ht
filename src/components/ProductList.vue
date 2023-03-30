<template>
    <div>ПРИВЕТ</div>
</template>


<script>
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions('cart', {
                addToCart: 'add'    
            })
        }
    }
</script>