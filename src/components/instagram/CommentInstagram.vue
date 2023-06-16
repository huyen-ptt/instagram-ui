<template>
  <div>
    <el-dialog custom-class="no-padding-modal no-padding-header comment-modal"
               :visible.sync="isOpenCommnetModal">
      <div class="comment-me">
        <div>
          <img class="img-post" :src="currentComment?.post"/>
        </div>
        <div class="show-comments">
          <div class="post-feel">
            <div class="personal-post modal">
              <div class="title-personal-post">
                <img class="avt-personal-post"
                     :src="currentComment?.avt"/>
                <div class="name-personal-post">{{ currentComment?.name }}</div>
              </div>
              <svg aria-label="More options" class="_ab6- three-cham" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                   height="24"
                   role="img"
                   viewBox="0 0 24 24" width="24">
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="6" cy="12" r="1.5"></circle>
                <circle cx="18" cy="12" r="1.5"></circle>
              </svg>
            </div>
            <div class="title-personal-post">
              <img class="avt-personal-post"
                   :src="currentComment?.avt"/>
              <div>
                <div class="name-friend-post">
                  <div class="name-personal-post">{{ currentComment?.name }}</div>
                  <div>{{ currentComment?.content }}</div>
                </div>
                <div class="time-craeated">
                  <div>17h</div>
                  <div>See translation</div>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper-comment">
            <div v-for="item in currentComment?.commentList"
                 :key="item.id"
                 class="person-comments">
              <div class="title-personal-post">
                <img class="avt-personal-post" :src="item.img"/>
                <div class="interactive-friends">{{ item.created_by.id }}</div>
                <div class="content-comment">
                  {{ item.contentComment }}
                </div>
              </div>
            </div>
          </div>
          <div class="comments-modal">
            <div>
              <div class="emotional-interaction">
                <div class="like-share">
                  <div @click="likePostFriendModal"
                       id="heart">
                    <i v-if="!like" class="fa-regular fa-heart"></i>
                    <i v-else class="fa-sharp fa-solid fa-heart"></i>
                  </div>
                  <svg aria-label="Comment" class="x1lliihq x1n2onr6 emotional-status"
                       color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
                       role="img" viewBox="0 0 24 24" width="24"><title>Comment</title>
                    <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                          stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                  <svg aria-label="Share Post" class="x1lliihq x1n2onr6 emotional-status" color="rgb(0, 0, 0)"
                       fill="rgb(0, 0, 0)"
                       height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title>
                    <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218"
                          y1="3" y2="10.083"></line>
                    <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                             stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
                  </svg>
                </div>
                <div>
                  <svg aria-label="Save" class="x1lliihq x1n2onr6 save" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                       height="24"
                       role="img" viewBox="0 0 24 24" width="24"><title>Save</title>
                    <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                             stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                  </svg>
                </div>
              </div>
              <div class="liked">
                Liked by <span class="interactive-friends">hah_ny</span>
              </div>
            </div>
            <div>
              <div class="comment">
                <textarea v-model="search"
                          @keyup.enter="onEnterModal(currentComment)"
                          class="comment-you"
                          placeholder="Add a comment…"></textarea>
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
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return{
      like: false,
      search: '',
      isOpenCommnetModal : false,
      currentComment: null,
      currentPost: null,
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
        }
      ],
    }
  },
  methods:{
    likePostFriendModal() {
      if (!this.like) {
        this.like = true
      } else {
        this.like = false
      }
    },
    onEnterModal(post) {
      this.currentComment = post
      const newCommentModal = {
        contentComment: this.search,
        img: 'https://media.istockphoto.com/id/531162849/vi/anh/ng%C3%B4i-sao-nh%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Puxjm4Bg5lkELXF2dwDDE_Tfbbtgwlr2bxAWzGHBibE=',
        created_by: {
          id: 'huyn.huyn',
        },
        is_like: false
      }
      this.currentComment.commentList.push(newCommentModal);
      this.search = '';
    },
    open(post) {
      this.currentPost = post;
      this.currentComment = post;
      this.isOpenCommnetModal = true;
    },
  }
}
</script>
<style scoped>
.comment-me {
  gap: 5px;
  height: 70vh;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.wrapper-comment{
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 1px;
  overflow: auto;
  padding-left: 5px;
}
.img-post {
  width: 100%;
  height: 100%;
}
.show-comments {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 1px;
}
.personal-post {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal {
  border-bottom: 1px solid grey;
}
.title-personal-post {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 8px 4px 15px 5px;
}
.interactive-friends:hover {
  cursor: pointer;
}
.interactive-friends {
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 0, 0);
  font-weight: 600;
}
.comments-modal {
  width: 100%;
}
.avt-personal-post:hover {
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
.three-cham:hover {
  cursor: pointer;
}
.avt-personal-post {
  width: 42px;
  height: 42px;
  border-radius: 999px;
}
.emotional-interaction {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.like-share {
  display: flex;
  gap: 10px;
  align-items: center;
}
#heart i {
  color: red;
  cursor: pointer;
  font-size: 24px;
}
.fa-heart {
  color: red;
}
.save:hover {
  cursor: pointer;
  opacity: .5;
}

.liked {
  margin-bottom: 10px;
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
.felling-icon:hover {
  cursor: pointer;
  opacity: .5;
}
.felling-icon {
  position: absolute;
  top: 13px;
  right: 10px;
}
@media (max-width: 415px){
  .comment-me {
    display: flex;
    flex-direction: column;
    min-height: 600px;
  }
  .comments-modal {
    padding: 0 10px;
  }

  .personal-post.modal {
    display: none;
  }
  .show-comments {
    height: 100%;
  }
  .post-feel {
    border-bottom: 1px solid gainsboro;
    padding-bottom: 5px;
  }
}
</style>