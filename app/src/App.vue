<template>
  <div class="bg-dark min-height">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>

<style scoped>
    .min-height{
      min-height: 120vh;
    }
</style>