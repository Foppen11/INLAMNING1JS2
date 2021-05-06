<template>
    <div class="container mt-5">
        <div class="border rounded p-5">
            <h1 class="text-center border-bottom mb-4 pb-4"> {{product.name}} </h1>
            <p class="text-center">Description: {{product.desc}} </p>
            <h3 class="text-center">Price: {{product.price}}kr </h3>
            <div class="center mt-4">
                <button class="btn btn-info me-2">Add to cart</button>
                <button class="btn btn-danger">Remove from cart</button>
            </div>
            <div class="center mt-2">
                <p class="card-text mt-2">In cart: 0</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods: {
        ...mapActions(['getProduct'])
    },
    computed:{
        ...mapGetters(['product'])
    },
    created(){
        this.getProduct(this.$route.params.id)
    }
}
</script>

<style scoped>
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>