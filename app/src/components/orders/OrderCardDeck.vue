<template>
    <div class="mt-2 row-cols-1 g-4">
        <OrderCard v-for="order in orders" :key="order._id" :order="order" />     
       
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrderCard from './OrderCard'
export default {
    name: 'OrderCardDeck',
    computed: {
        ...mapGetters(['orders'])
    },
    components:{
        OrderCard
    }
}
</script>

<style>

</style>