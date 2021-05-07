<template>
  <div>
        <div v-if="product" class="container my-5 py-5 bg-light">
            <section class="text-center">
                <h3 class="mb-5 font-weight-bold">Product Details</h3>

                <div class="row align-items-center gx-5">
                    <!-- LEFT SIDE -->
                    <div class="col-lg-6">
                        <img :src="product.image" alt="..." class="img-fluid">
                    </div>
                    <!-- RIGHT SIDE -->
                    <div class="col-lg-6 text-center text-lg-start">
                        <div>
                            <h2 class="text-center font-weight-bold mb-5"> {{product.name}} </h2>
                            <div class="mb-5">
                                <h5 class="mb-3">Description:</h5>
                                <p>{{product.desc}}</p>
                            </div>

                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h3> Pris: {{product.price}} SEK </h3>
                            <button @click="addProductToCart({product, quantity})" class="btn btn-primary">Add to cart</button>
                        </div>
                    </div>


                </div>
            </section>
        </div>

        <div v-else>
            <h3>LOADING...</h3>
        </div>
      
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ProductDetails',
    data(){
        return{
            quantity: 1
        }
    },
    methods: {
        ...mapActions(['getOneProduct', 'cleanup', 'addProductToCart'])
    },
    created(){
        this.getOneProduct(this.$route.params.id)
    },
    computed:{
        ...mapGetters(['product'])
    },
    destroyed(){
        this.cleanup()
    }
}
</script>

<style>

</style>