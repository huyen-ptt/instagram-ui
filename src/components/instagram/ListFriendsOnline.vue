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
      <div class="name-friend">Anneee</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt.png"/>
      <div class="name-friend">Jonh</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt (4).png"/>
      <div class="name-friend">Hzzz</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt.png"/>
      <div class="name-friend">Jonh</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt (4).png"/>
      <div class="name-friend">Hzzz</div>
    </div><div class="circle-avt">
    <img class="avt-friend" src="@/assets/avt.png"/>
    <div class="name-friend">Jonh</div>
  </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt (4).png"/>
      <div class="name-friend">Hzzz</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt.png"/>
      <div class="name-friend">Jonh</div>
    </div>
    <div class="circle-avt">
      <img class="avt-friend" src="@/assets/avt (4).png"/>
      <div class="name-friend">Hzzz</div>
    </div>

  </div>
</template>
<script></script>
<style scoped>
.header {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  max-width: 500px;
  overflow-x: auto;
  overflow-y: hidden;
  min-height: 20vh;
}
.header::-webkit-scrollbar {
  width: 0px;

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
  min-width: 66px;
  border-radius: 999px;
  padding: 3px;
  border: 3px solid #55A99D;
}
.avt-friend {
  padding-bottom: 5px;
}
@media (max-width: 768px) {
  .header{
    min-height: 22vh;
  }
}
@media (max-width: 415px) {
  .circle-avt{
    width: 56px;
    height: 56px;
    min-width: 56px;
  }
  .header{
    justify-content: space-around;
    max-width: 100vh;
    min-height: 20vh;
    margin-bottom: 0;
  }
}
</style>