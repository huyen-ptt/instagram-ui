<template>
  <div>
    <div v-for="(post,index) in postList"
         :key="index"
         class="bao-personal-post">
      <HeaderPost :post="post"/>
      <img class="post-picture" :src="post.post"/>
      <div class="comments">
        <CommentListPost :post="post" @openModalComment="openComment" @openModalShare="openShare"/>
        <ListCommentPost :post="post"/>
<!--        <CommentPost :post="post"/>-->
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
      </div>
    </div>
  </div>
</template>
<script>
import HeaderPost from "@/components/instagram/HeaderPost.vue";
import CommentListPost from "@/components/instagram/CommentListPost.vue";
import ListCommentPost from "@/components/instagram/ListCommentPost.vue";
// import CommentPost from "@/components/instagram/CommentPost.vue";
export default {
  components: {
    HeaderPost,
    CommentListPost,
    ListCommentPost,
    // CommentPost
  },
  data() {
    return {
      comment: '',
      postList: [
        {
          id: 1,
          avt: 'https://images.unsplash.com/photo-1593601680767-3a289f3761aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80',
          name: 'ane.tdiuz',
          created_at: 1686581516,
          content: ' Đôi khi chỉ cần thâ hiểu nhau ...',
          post: 'https://images.unsplash.com/photo-1611200945005-403b70229452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          commentList: [
            {
              id: 1,
              contentComment: 'xinh quá',
              img: 'https://media.istockphoto.com/id/148484407/vi/anh/n%C6%B0%E1%BB%9Bc-anh-%C4%91%C3%A0o-b%E1%BA%AFn-tung-t%C3%B3e.jpg?s=2048x2048&w=is&k=20&c=Xt3L5dqnUHAiLO5XdT0qHh9o07MEwFpYdsIdPMaaFbQ=',
              created_by: {
                id: 'naznaz.hhr',
              },
              is_like: false
            },
            {
              id: 2,
              contentComment: 'Tuyệt vời',
              content: ' Ngày ấy bạn và tôi',
              img: 'https://media.istockphoto.com/id/531162849/vi/anh/ng%C3%B4i-sao-nh%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Puxjm4Bg5lkELXF2dwDDE_Tfbbtgwlr2bxAWzGHBibE=',
              created_by: {
                id: 'ngocba.âhc',
              },
              is_like: false
            }
          ],
          comentContainer: ""
        },
        {
          id: 2,
          avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png',
          name: 'hanna.huyn',
          created_at: 1686581516,
          post: 'https://images.unsplash.com/photo-1611864444643-457fb0e29009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          commentList: [
            {
              id: 3,
              contentComment: 'Nay làm không',
              img: 'https://media.istockphoto.com/id/148484407/vi/anh/n%C6%B0%E1%BB%9Bc-anh-%C4%91%C3%A0o-b%E1%BA%AFn-tung-t%C3%B3e.jpg?s=2048x2048&w=is&k=20&c=Xt3L5dqnUHAiLO5XdT0qHh9o07MEwFpYdsIdPMaaFbQ=',
              created_by: {
                id: 'huyen.hazzz',
              },
              is_like: false
            },
            {
              id: 4,
              contentComment: 'Tạm',
              img: 'https://media.istockphoto.com/id/531162849/vi/anh/ng%C3%B4i-sao-nh%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Puxjm4Bg5lkELXF2dwDDE_Tfbbtgwlr2bxAWzGHBibE=',
              created_by: {
                id: 'van.kong',
              },
              is_like: false
            }
          ],
          comentContainer: ""
        },
        {
          id: 3,
          avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/gliter-cat-2zz3v_025742551.png',
          name: 'ngozzz.hihi',
          content: ' Đôi khi chỉ cần thâ hiểu nhau ...',
          created_at: 1686581516,
          post: 'https://images.unsplash.com/photo-1586723815262-83713dcfbfa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
          commentList: [
            {
              id: 5,
              contentComment: 'Tuyêt vời',
              img: 'https://media.istockphoto.com/id/148484407/vi/anh/n%C6%B0%E1%BB%9Bc-anh-%C4%91%C3%A0o-b%E1%BA%AFn-tung-t%C3%B3e.jpg?s=2048x2048&w=is&k=20&c=Xt3L5dqnUHAiLO5XdT0qHh9o07MEwFpYdsIdPMaaFbQ=',
              created_by: {
                id: 'haha.hhr',
              },
              is_like: false
            },
            {
              id: 6,
              contentComment: 'xinh thế',
              img: 'https://media.istockphoto.com/id/531162849/vi/anh/ng%C3%B4i-sao-nh%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Puxjm4Bg5lkELXF2dwDDE_Tfbbtgwlr2bxAWzGHBibE=',
              created_by: {
                id: 'bich.ngiaa',
              },
              is_like: false
            }
          ],
          comentContainer: ""
        }
      ],
      isOpenShareModal: false
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
    openComment(post){
      this.$emit('openModalComment',post)
    },
    openShare() {
      this.$emit('openModalShare',)
    },

  }
}
</script>
<style scoped>
.bao-personal-post {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.post-picture {
  width: 500px;
  height: 500px;
  margin-bottom: 15px;
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