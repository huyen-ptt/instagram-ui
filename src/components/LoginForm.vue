<template>
  <div>
   <div>
     <input type="text" @keyup.enter="loginform" v-model="username"/>
     <label>username</label>
   </div>

    <div>
      <input type="password" @keyup.enter="loginform" v-model="password">
      <label>password</label>
    </div>
    <button @click="loginform">Đăng nhập</button>
    <div v-if="matkhau" class="errorMessage">sai rồi</div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        username:'',
        password:'',
        matkhau : false,
      }
    },
    methods:{

      loginform(){
        this.matkhau = false
        if(this.username==='admin' && this.password==='1234567'){
          console.log('đăng nhập thành công')
        }else {
          this.matkhau = true
        }
        console.log('username',this.username,'password',this.password )
      }
    },
    
  }
</script>
<style>
  .errorMessage{
    color: red;
  }
</style>