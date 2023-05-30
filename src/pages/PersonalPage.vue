<template>
  <div class="container">
    <MenuInstagram/>
    <div class="information">
      <HeaderInfomation/>
      <div>
        <i class="fa-thin fa-circle-camera"></i>
        <div class="item-one">Share Photos</div>
        <div class="item-two">When you share photos, they will appear on your profile.</div>
        <div class="item-three">Share your first photo</div>
      </div>
      <div class="footer-infomation">
        <FooterInfomation/>
      </div>
    </div>
  </div>

</template>
<script>
import MenuInstagram from "@/components/instagram/MenuInstagram.vue";
import FooterInfomation from "@/components/instagram/FooterInfomation.vue";
import HeaderInfomation from "@/components/instagram/HeaderInfomation.vue";
export default {
  components: {
    MenuInstagram,
    FooterInfomation,
    HeaderInfomation
  },
}
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
}


.item-one{
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 18px;
  text-align: center;
}
.item-two{
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 18px;
  text-align: center;
}
.item-three{
  color: rgb(0, 149, 246);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 80px;
  text-align: center;
}
.item-three:hover{
  cursor: pointer;
  color: rgb(0, 55, 107);
}
.information {
  overflow: auto;
  flex: 1;
  min-width: 1px;
  width: 100%;
  padding: 30px 20px;
}
</style>