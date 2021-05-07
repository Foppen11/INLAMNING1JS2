<template>
    <div>
        <div class="container mt-5">
            <ProductCardDeck />

        </div>
    </div>
</template>

<script>
import ProductCardDeck from '../components/products/ProductCardDeck'
import { mapActions } from 'vuex'
export default {
    components:{
        ProductCardDeck
    },
    methods:{
        ...mapActions(['getProducts'])
    },
    created(){
        this.getProducts()
    }
}
</script>

<style>

</style>