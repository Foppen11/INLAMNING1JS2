<template>
  <div class="col">
      <div class="card p-3">
          <div class="card-body">
            <div class="d-flex justify-content-between">
                <h4 class="card-title">Order id: IDNUMBER</h4>
                <h4>FORNAMN EFTERNAMN</h4>
            </div>
            <p class="card-text my-0">Order contains:</p>
            <div class="d-flex">
                <h5 class="me-4 my-1">Vara 1</h5>
                <p class="me-4 my-1">Amount: 1</p>
                <p class="my-1">Price: 500kr</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'OrderCard',
    props:['order'],
}
</script>

<style>

</style>