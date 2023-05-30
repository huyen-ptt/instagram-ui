<template>
  <div class="container">
    <MenuInstagram/>
    <div class="information">
      <HeaderInfomation/>
      <div>
        <i class="fa-thin fa-circle-camera"></i>
        <div class="item-one">Photos of you</div>
        <div class="item-two">When people tag you in photos, they'll appear here.</div>
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
  text-align: center;
  margin-bottom: 80px;
}

.information {
  overflow: auto;
  flex: 1;
  min-width: 1px;
  width: 100%;
  padding: 30px 20px;
}
</style>
