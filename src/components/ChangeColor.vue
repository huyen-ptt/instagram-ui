<template>
  <div v-if="isShow" style="display: flex; justify-content: space-between; width: 400px; height: 30px;margin-bottom: 10px;" :style="`background: ${color}`" >
    <div>{{text}} </div>
    <button @click="RemoveItem">X</button>
  </div>
</template>
<script>
  export default {

    props:{
      color:{
        type: String,
        require: true
      },
      text : {
        type: String ,
        require: true
      }
    },
    data(){
      return{
        isShow : true,

      }
    },
    methods:{
      RemoveItem(){
        this.$emit('Remove',123)
        this.isShow = false
      },

    }


  }

</script>