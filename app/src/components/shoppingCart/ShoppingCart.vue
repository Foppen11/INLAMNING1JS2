<template>
  <div>
      
      <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />

      <div v-if="shoppingCart.length < 1">
          <div class="p-2 d-flex justify-content-between align-items-center">
              Your shoppingcart is empty.
          </div>
          <div class="dropdown-divider"></div>
      </div>
    

      <div class="p-2 d-flex justify-content-between align-items-center">
          <div>
                <div class="total-price">
                    Total price: <span> {{cartTotalCost}} SEK</span>
                </div>
                <small class="text-muted">inkl. moms</small>
          </div>
          <button class="btn btn-primary">Go to payment</button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'
export default {
    name: 'ShoppingCart',
    computed: {
        ...mapGetters(['shoppingCart', 'cartTotalCost'])
    },
    components:{
        ShoppingCartProduct
    }

}
</script>

<style>

</style>