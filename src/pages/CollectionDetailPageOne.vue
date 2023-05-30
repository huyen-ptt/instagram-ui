<template>
  <div class="container">
    <h1>Collection detail page</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created() {
    console.log('route', this.$route)
  }
}
</script>