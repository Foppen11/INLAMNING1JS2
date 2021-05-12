<template>
<div class="container">
        <h1 class="text-light text-center mt-3">Orders</h1>
    <div class="card mt-3">
        <OrderCardDeck />
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import OrderCardDeck from '../components/orders/OrderCardDeck'
export default {
    name: 'Orders',
    components: {
        OrderCardDeck
    },
    methods: {
        ...mapActions(['getOrders'])
    },
    computed: {
        ...mapGetters(['activeUser'])
    },
    created(){
        this.getOrders(this.activeUser)
    }
}
</script>

<style>
    
</style>