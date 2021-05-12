<template>
    <div class="mt-2">
        <div class="d-flex justify-content-between p-2">
            <h4 class="card-title">Order ID: <small>{{order._id}}</small></h4>
            <h4>Order: {{ order.email }} </h4>
        </div>
        <div class="card-body">
            <p class="card-text my-0">Order contains:</p>
            <div>
                <OrderListDetail v-for="(product, index) in order.list" :key="index" :product="order.list[index]" />
            </div>
            <h5>Total price: {{ order.price }} SEK</h5>
        </div>
        <hr class="bold">
    </div>
</template>

<script>
import OrderListDetail from './OrderListDetail'
export default {
    name: 'OrderCard',
    props:['order'],
    components:{
        OrderListDetail
    },
    methods:{
        index(){
            
        }
    }
}
</script>

<style scoped>
    .bold{
        border: 2px solid black;
    }
</style>