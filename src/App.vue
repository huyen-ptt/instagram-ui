<template>
  <div id="app">
    <div class="app-container">
<!--      <div class="sidebar">-->

<!--      </div>-->
     <main>
       <router-view></router-view> <!--sẽ hiện thị 1 component tương ứng với url . có thể đặt ở bâts kì đâu-->
       <!--     các component con của 1component thì gọi là  chidren-->
     </main>
    </div>
  </div>

</template>

<style>
.sidebar {
  width: 100%;
  background: red;
  height: 100vh;
}
/*!*.app-container {*!*/
/*!*  display: grid;*!*/
/*!*  grid-template-columns: 300px 1fr;*!*/
/*!*}*!*/
/*!*main {*!*/
/*!*  !*padding: 15px;*!*!*/
/*!*  background: #0C1F22;*!*/
/*!*  color: white;*!*/
/*}*/
</style>

<script>
export default {
  name: 'App',
}
</script>