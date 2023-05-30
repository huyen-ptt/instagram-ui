<template>
  <div class="personal-post">
    <div class="title-personal-post">
      <img @click="informationFriend"
           class="avt-personal-post"
           src="@/assets/avt-friend.png"/>
      <div class="name-personal-post">ane.tdiuz</div>
      <div class="craeted-time">5d</div>
    </div>
    <svg aria-label="More options" class="_ab6- three-cham" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
         height="24" role="img"
         viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  </div>
</template>
<style scoped>
.personal-post {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


</style>