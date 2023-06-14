<template>
  <div class="personal-post">
    <div class="title-personal-post">
      <img @click="informationFriend"
           class="avt-personal-post"
           :src="post.avt"/>
      <div class="name-personal-post">{{ post.name }}</div>
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
<script>
export default {
  props: {
    post: {
      type: Object,
    }
  },
  methods: {
    informationFriend() {
      this.isOpenInformationModal = true
    },
  },
}
</script>
<style scoped>
.avt-personal-post {
  width: 42px;
  height: 42px;
  border-radius: 999px;
}

.personal-post {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-personal-post {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 8px 4px 15px 5px;
}

.avt-personal-post:hover {
  cursor: pointer;
}

.craeted-time {
  font-size: 14px;
  color: rgb(115, 115, 115);
  font-weight: 400;
}

.three-cham:hover {
  cursor: pointer;
}

.avt-personal-post {
  width: 42px;
  height: 42px;
}

.name-personal-post:hover {
  cursor: pointer;
  color: rgb(114, 114, 114);
}

.name-personal-post {
  font-size: 14px;
  line-height: 18px;
  color: rgb(38, 38, 38);
  font-weight: 600;
}
</style>