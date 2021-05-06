<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './ProductCard'
export default {
    name: 'ProductCardDeck',
    computed: {
        ...mapGetters(['products'])
    },
    components:{
        ProductCard
    }
}
</script>

<style>

</style>