<template>
  <div class="container">
    <MenuInstagram/>
    <div class="information">
      <HeaderInfomation/>
      <div class="section">
        <div class="title-body">
          <div class="nhac-nho">Only you can see what you've saved</div>
          <div class="add">+ New Collection</div>
        </div>
        <div class="bao-img">
          <img class="img-suggest" src="https://img5.thuthuatphanmem.vn/uploads/2022/01/07/glitter-mask-hnheldinw_025549768.png"/>
        </div>
      </div>
      <FooterInfomation/>
    </div>
  </div>
</template>
<script>
import MenuInstagram from "@/components/instagram/MenuInstagram.vue";
import HeaderInfomation from "@/components/instagram/HeaderInfomation.vue";
import FooterInfomation from "@/components/instagram/FooterInfomation.vue";
export default {
  components:{
    MenuInstagram,
    HeaderInfomation,
    FooterInfomation
  }
}
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
}
.section{
  padding:0 90px;
}
.nhac-nho{
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: rgb(115, 115, 115);
}
.add{
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color:rgb(0, 149, 246);
  cursor: pointer;

}
.information {
  overflow: auto;
  flex: 1;
  min-width: 1px;
  width: 100%;
  padding: 30px 20px;
}
.img-suggest{
  width: 300px;
  height: 300px;
  cursor: pointer;
}
.title-body{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.bao-img{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
</style>