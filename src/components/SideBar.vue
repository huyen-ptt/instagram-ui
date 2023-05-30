<template>
 <div class="sidebar-wrapper">
   <a class="sidebar-item"
      v-for="(item, index) in menuList "
      :key="index"
      :href="item.url">
     {{item.text || '123'}}
   </a>
 </div>
</template>
<script>
export default{
  props : {
    menuList:{
      type : Array,
      require : true
    }
  },
}
</script>
<style scoped>
  .sidebar-item{
    text-decoration: none;
  }
  .sidebar-wrapper{
    display: flex;
    flex-direction:column ;
  }
</style>