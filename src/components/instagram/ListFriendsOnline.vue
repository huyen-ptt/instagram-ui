<template>
  <div class="header">
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt-friend.png"/>
      <div class="name-friend">Jeeny</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt (2).png"/>
      <div class="name-friend">hahaz</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt (3).png"/>
      <div class="name-friend">Anneee.dz</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt.png"/>
      <div class="name-friend">Jonh</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt (4).png"/>
      <div class="name-friend">Hzzz</div>
    </div>
<!--    <div class="circle-avt">-->
<!--      <img class="avt-friend" src="@/assets/avt (3).png"/>-->
<!--      <div class="name-friend">Jeeny</div>-->
<!--    </div>-->
<!--    <div class="circle-avt">-->
<!--      <img class="avt-friend" src="@/assets/avt (2).png"/>-->
<!--      <div class="name-friend">Jeeny</div>-->
<!--    </div>-->
  </div>
</template>
<script></script>
<style>
.header {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}
.name-friend {
  color: rgb(0, 0, 0);
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
}
.circle-avt:hover {
  cursor: pointer;
}
.circle-avt {
  width: 66px;
  height: 66px;
  border-radius: 999px;
  padding: 3px;
  border: 3px solid #55A99D;
}
.avt-friend {
  padding-bottom: 5px;
}
</style>