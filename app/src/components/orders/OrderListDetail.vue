<template>
    <div class="d-flex justify-content-around p-2">
        <p class="me-4 my-1">Product: {{ product.product.name }} </p>
        <p class="me-4 my-1">Amount: {{ product.quantity }} </p>
        <p class="my-1">Price each: {{ product.product.price }}</p>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style>
    
</style>