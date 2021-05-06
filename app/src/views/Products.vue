<template>
    <div class="container mt-3">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <Product v-for="(product, index) in products" :key="index" :product="product"  />
            
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Product from '../components/Product'
export default {
    components:{
        Product
    },
    computed: {
        ...mapGetters(['products'])
    },
    created(){
        this.getProducts()
    },
    methods:{
        ...mapActions(['getProducts'])
    }
}
</script>

<style>

</style>