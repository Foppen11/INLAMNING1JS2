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
                <button v-if="shoppingCart.length < 1" class="btn btn-primary me-2" disabled="true" >CART IS EMPTY</button>
                <router-link v-else-if="!loggedIn" type="button" to="/login" class="btn btn-primary me-2">SIGN IN TO MAKE ORDER</router-link>
                <button v-else class="btn btn-primary me-2" @click="order" >MAKE ORDER</button>
                <button class="btn btn-danger" @click="cleanCartList">RESET SHOPPINGLIST</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCartProduct from '../components/shoppingCart/ShoppingListDetails'
export default {
    computed: {
        ...mapGetters(['activeUser','shoppingCart','cartItemQuantity', 'cartTotalCost', 'loggedIn'])
    },
    components:{
        ShoppingCartProduct
    },
    methods:{
        ...mapActions(['cleanCartList', 'makeOrder']),
        order() {

            let order = {
                email: this.activeUser,
                list: this.shoppingCart,
                price: this.cartTotalCost
            }
            this.makeOrder(order)
            setTimeout(this.cleanCartList, 2000)
        }
    }

}
</script>

<style>

</style>