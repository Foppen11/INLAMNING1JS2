<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <OrderCard v-for="order in orders" :key="order.id" :product="order" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrderCard from './OrderCard'
export default {
    name: 'ProductCardDeck',
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