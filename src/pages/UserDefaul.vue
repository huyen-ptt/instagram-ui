<template>
  <div class="component">
    <h3>Con</h3>
    <p>tên toi:{{hihiname}}</p>
    <button>Doi ten</button>
  </div>
</template>

<script>
  export default {
    props:{
      hihiname:{
        type : Number ,
        require:true
      }
    },
    // methods:{
    //   changeAge () {
    //     this.age = 20
    //   }
    // },

  }
</script>
<style scoped>
  .component{
    background: #42b983;
  }
</style>