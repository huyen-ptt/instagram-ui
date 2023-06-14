<template>
  <div class="show-comment">
    <div v-for="comment in post.commentList"
         :key="comment.id"
         class="person-comments">
      <div class="title-personal-post">
        <div class="interactive-friends">{{ comment.created_by.id }}</div>
        <div class="content-comment">
          {{ comment.contentComment }}
        </div>
      </div>
      <div>
        <i @click="toggleLike(comment)" class="fa fa-heart"
           :class="{ 'fa-heart': comment.is_like, 'fa-heart-o': !comment.is_like }"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    post:{
      type: Object
    }
  },
  methods:{
    toggleLike(comment) {
      comment.is_like = !comment.is_like;
    },
  }
}
</script>
<style scoped lang="scss">
.show-comment {
  max-height: 200px;
  overflow: auto;
  .title-personal-post {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px 4px 15px 5px;
  }
  .person-comments {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .fa {
    font-size: 20px;
    color: grey;
    cursor: pointer;
  }

  .fa-heart {
    color: red;
  }

  .fa-heart-o {
    color: grey;
  }
}
</style>