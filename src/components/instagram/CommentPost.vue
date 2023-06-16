<template>
  <div class="comment">
                <textarea v-model="post.comentContainer"
                          @keyup.enter="onEnter(post)"
                          class="comment-you"
                          placeholder="Add a comment…">
                </textarea>
    <div @click="onEnter(post)"
         v-if="hasComment"
         class="post">Post
    </div>
    <div>
      <svg aria-label="Emoji" class="x1lliihq x1n2onr6 felling-icon" color="rgb(115, 115, 115)"
           fill="rgb(115, 115, 115)"
           height="13" role="img" viewBox="0 0 24 24" width="13"><title>Emoji</title>
        <path
            d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
      </svg>
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
  computed: {
    hasComment() {
      return Boolean(this.comment.trim()); // trả về true nếu trường có giá trị
    }
  },
  methods: {
    onEnter(post) {
      console.log(post)
      this.currentComment = post
      console.log(post.comentContainer)
      const newComment = {
        contentComment: post.comentContainer,
        created_by: {
          id: 'huyn.huyn',
        },
        is_like: false

      }

      this.currentComment.commentList.push(newComment);
      post.comentContainer = '';
    },

  }
}
</script>
<style scoped lang="scss">
.comment {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}

.comment-you {
  width: 100%;
  padding: 10px;
  border: 0;
  border-bottom: 1px solid;
  outline: none;
}

.comments {
  display: flex;
  flex-direction: column;
}

#heart i {
  color: red;
  cursor: pointer;
  font-size: 24px;
}

.post {
  position: absolute;
  top: 10px;
  right: 30px;
  color: rgb(0, 149, 246);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

.felling-icon:hover {
  cursor: pointer;
  opacity: .5;
}

.felling-icon {
  position: absolute;
  top: 13px;
  right: 10px;
}

</style>