<template>
    <div>
        <div class="col">
                <div class="card">
                    <div class="card-body">
                        <router-link :to="'/products/' + product._id" >
                            <h4 class="card-title"> {{product.name}} </h4>
                            <p class="card-text min-height"> {{product.desc | shorten}} </p>
                            <h5 class="card-text">Price: {{product.price}}kr </h5>
                        </router-link>
                        <div class="mt-3">
                            <button class="btn btn-info me-2">Add to cart</button>
                            <button class="btn btn-danger">Remove from cart</button>
                            <p class="card-text mt-2">In cart: 0</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: ['product'],
    filters:{
        shorten(val){
            return val.slice(0, 100) + '...'
        }
    }
}
</script>

<style scoped>
    .card-title{
        color: #000;
    }
    .card-text{
        color: #000;
    }
    .min-height{
        min-height: 4rem;
    }
</style>