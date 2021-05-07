<template>
  <div class="container">
            <h1 class="card-title text-bold text-center text-light mt-3">ShoppingCart</h1>
      <div class="card mt-3">
        <div class="card-body">
            <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />
            <div>
                <h4>Amount of products: {{cartItemQuantity}}</h4>
                <h5>Total price: {{cartTotalCost}} SEK</h5>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <button class="btn btn-primary me-2">MAKE ORDER</button>
                <button class="btn btn-danger">RESET SHOPPINGLIST</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from '../components/shoppingCart/ShoppingListDetails'
export default {
    computed: {
        ...mapGetters(['shoppingCart','cartItemQuantity', 'cartTotalCost'])
    },
    components:{
        ShoppingCartProduct
    }

}
</script>

<style>

</style>