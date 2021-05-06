<template>
  <div class="col">
      <div class="card p-3">
          <img :src="product.image" alt="..." class="card-img-top image-size">
          <div class="card-body">
              <h5 class="card-title"> {{product.name}} </h5>
              <p class="card-text"> {{product.desc | shorten}} </p>

              <router-link :to="'/products/' + product._id" :product="product" type="button" class="btn btn-primary">Show Product</router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props:['product'],
    filters:{
        shorten(val){
            return val.slice(0, 100) + '...'
        }
    }
}
</script>

<style scoped>
    .image-size{
        max-width: 300px;
        max-height: 300px;
    }
</style>