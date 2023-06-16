<template>
  <div>
    <div class="emotional-interaction">
      <div class="like-share">
        <div @click="likePostFriend"
             id="heart">
          <i v-if="!like" class="fa-regular fa-heart"></i>
          <i v-else class="fa-sharp fa-solid fa-heart"></i>
        </div>
        <svg @click="commentPost(post)" aria-label="Comment" class="x1lliihq x1n2onr6 emotional-status"
             color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
             role="img" viewBox="0 0 24 24" width="24"><title>Comment</title>
          <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                stroke-linejoin="round" stroke-width="2"></path>
        </svg>
        <svg @click="sharePost" aria-label="Share Post" class="x1lliihq x1n2onr6 emotional-status"
             color="rgb(0, 0, 0)"
             fill="rgb(0, 0, 0)"
             height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title>
          <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218"
                y1="3" y2="10.083"></line>
          <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                   stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
        </svg>
      </div>
      <div @click="savePost">
        <svg v-if="!save" aria-label="Save" class="x1lliihq x1n2onr6 save" color="rgb(0, 0, 0)"
             fill="rgb(0, 0, 0)"
             height="24"
             role="img" viewBox="0 0 24 24" width="24"><title>Save</title>
          <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                   stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
        </svg>
        <svg v-else aria-label="Remove" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
             height="24" role="img" viewBox="0 0 24 24" width="24"><title>Remove</title>
          <path
              d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
        </svg>
      </div>
    </div>
    <div class="liked">
      Liked by <span class="interactive-friends">hah_ny</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
    }
  },
  data(){
    return{
      save: false,
      like: false,
      currentComment: null
    }
  },
  methods:{
    likePostFriend() {
      if (!this.like) {
        this.like = true
      } else {
        this.like = false
      }
    },
    sharePost() {
      this.$emit('openModalShare',)
    },
    commentPost(post) {
      this.$emit('openModalComment',post)
      // this.isOpenCommnetModal = true
      this.currentComment = post
    },
    savePost() {
      if (!this.save) {
        this.save = true
      } else {
        this.save = false
      }
    },
  }
}
</script>
<style scoped lang="scss">
.emotional-interaction {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .save{
    &:hover{
      cursor: pointer;
      opacity: .5;
    }
  }
  .like-share {
    display: flex;
    gap: 10px;
    align-items: center;
    #heart i {
      color: red;
      cursor: pointer;
      font-size: 24px;
      .fa-heart {
        color: red;
      }
    }
    .emotional-status {
      &:hover {
        cursor: pointer;
        opacity: .5;
      }
    }
  }
}
.liked {
  margin-bottom: 10px;
  .interactive-friends {
    font-size: 14px;
    line-height: 18px;
    color: rgb(0, 0, 0);
    font-weight: 600;
  }
}

</style>