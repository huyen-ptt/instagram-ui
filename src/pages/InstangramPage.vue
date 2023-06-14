<template>
  <div class="container">
    <MenuInstagram/>
    <HeaderInstagramDt/>
    <div class="home-page">
      <div class="feeds-content">
        <div class="home">
          <ListFriendsOnline/>
          <PostInstagram @openModalComment="openComment"/>
        </div>
        <SuggestionsPage/>
      </div>
    </div>
    <MenuInstagramDt/>
    <el-dialog title=""
               :visible.sync="isOpenInformationModal">
      <div>
        <div class="title-personal-post">
          <img class="avt-personal-post"
               src="../assets/avt-friend.png"/>
          <div>
            <div class="name-personal-post">ane.tdiuz</div>
            <div class="craeted-time">Thuy Diu</div>
          </div>
        </div>
        <div class="user-information">
          <div>
            <div>1</div>
            <div>Post</div>
          </div>
          <div>
            <div>230</div>
            <div>Follower</div>
          </div>
          <div>
            <div>20</div>
            <div>Following</div>
          </div>
        </div>
        <div>
          <img class="avt-information" src="../assets/avt.jpg"/>
        </div>
        <div class="contact">
          <!--          <i class="fa-brands fa-facebook-messenger"></i>-->
          <el-button type="primary" round>Messenger</el-button>
        </div>
      </div>
    </el-dialog>
    <CommentInstagram ref="opentModal"/>

    <el-dialog title="Share"
               custom-class="custom-modal-share"
               :visible.sync="isOpenShareModal">
      <div>
        <div>
          <!--          <div class="share">share</div>-->
          <div class="comment-modal">
            <div>To:</div>
            <input class="search-modal" type="text" placeholder="Search..."/>
          </div>
        </div>
        <div>
          <div class="suggest">Suggested</div>
          <div class="modall">
            <div class="title-personal-post">
              <img class="avt-personal-post"
                   src="../assets/avt (4).png"/>
              <div>
                <div class="name-personal-post">Huyn12</div>
                <div class="craeted-time">Thanh Huyen</div>
              </div>
            </div>
            <input type="checkbox">
          </div>
          <div class="modall">
            <div class="title-personal-post">
              <img class="avt-personal-post"
                   src="../assets/avt (2).png"/>
              <div>
                <div class="name-personal-post">anhxinh</div>
                <div class="craeted-time">Nguyen Anh</div>
              </div>
            </div>
            <input type="checkbox">
          </div>
          <div class="modall">
            <div class="title-personal-post ">
              <img class="avt-personal-post"
                   src="../assets/avt (3).png"/>
              <div>
                <div class="name-personal-post">fshb.s</div>
                <div class="craeted-time">Ngoc Huyen</div>
              </div>
            </div>
            <input type="checkbox">
          </div>
        </div>
        <button class="send">Send</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import MenuInstagram from '@/components/instagram/MenuInstagram.vue';
import ListFriendsOnline from '@/components/instagram/ListFriendsOnline.vue';
// import HomePageInstagram from "@/components/instagram/HomePageIstagram.vue";
import SuggestionsPage from "@/components/instagram/SuggestionsPage.vue";
import MenuInstagramDt from "@/components/instagram/MenuInstagramDt.vue";
import HeaderInstagramDt from "@/components/instagram/HeaderInstagramDt.vue";
import CommentInstagram from "@/components/instagram/CommentInstagram.vue";
import PostInstagram from "@/components/instagram/PostInstagram.vue";

export default {
  components: {
    // HomePageInstagram,
    MenuInstagram,
    ListFriendsOnline,
    SuggestionsPage,
    MenuInstagramDt,
    HeaderInstagramDt,
    CommentInstagram,
    PostInstagram
  },
  data() {
    return {
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
      isOpenInformationModal: false,
      isOpenCommnetModal: false,
      isOpenShareModal: false,
      like: false,
      save: false,
      comment: '',
      search: '',
      currentComment: null
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
      console.log(this.comment)
      const newComment = {
        contentComment: this.comment,
        created_by: {
          id: 'huyn.huyn',
        },
        is_like: false

      }

      this.currentComment.commentList.push(newComment);
      this.comment = '';
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
    savePost() {
      if (!this.save) {
        this.save = true
      } else {
        this.save = false
      }
    },
    informationFriend() {
      this.isOpenInformationModal = true
    },
    openComment(post) {
      this.$refs.opentModal.open(post);
      // this.isOpenCommnetModal = true
      this.currentComment = post
    },
    sharePost() {
      this.isOpenShareModal = true
    },
    likePostFriend() {
      if (!this.like) {
        this.like = true
      } else {
        this.like = false
      }
    },
    likePostFriendModal() {
      if (!this.like) {
        this.like = true
      } else {
        this.like = false
      }
    },
    toggleLike(comment) {
      comment.is_like = !comment.is_like;
    }
  },
}
</script>
<style lang="scss">
.no-padding-modal {
  .el-dialog__body {
    padding: 0;
  }
}

.no-padding-header {
  .el-dialog__header {
    padding: 0;
  }
}
</style>
<style scoped>
.fa {
  font-size: 20px;
  color: grey;
  cursor: pointer;
}

.avt-personal-post:hover {
  cursor: pointer;
}


.avt-personal-post {
  width: 42px;
  height: 42px;
  border-radius: 999px;
}

.fa-heart {
  color: red;
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

.fa-heart-o {
  color: grey;
}

.person-comments {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.comments {
  display: flex;
  flex-direction: column;
}

.comment-me {
  gap: 5px;
  height: 70vh;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.red {
  background: red;
}

.send {
  width: 100%;
  border-radius: 10px;
  background: rgb(0, 149, 246);
  padding: 16px 7px;
  color: #FFFFFF;
  font-size: 14px;
  border: 0;
  line-height: 18px;
  font-weight: 600;
}

.search-modal {
  border: 0;
  padding: 20px;
}

.suggest {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: black;
}

.search-modal {
  display: flex;
}

.user-information {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 30px;
}

.contact {
  position: relative;
}
#heart i {
  color: red;
  cursor: pointer;
  font-size: 24px;
}

.avt-personal-post:hover {
  cursor: pointer;
}

.avt-information {
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
}

.name-personal-post:hover {
  cursor: pointer;
  color: rgb(114, 114, 114);
}

.comment-modal {
  width: 100%;
  display: flex;
  gap: 10px;
  border-top: 1px solid #a4a0a0;
  border-bottom: 1px solid #a4a0a0;
  /*border-bottom: 1px solid;*/
  outline: none;
}

.title-personal-post {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 8px 4px 15px 5px;
}

.modall {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 4px 15px 5px;
}

.name-personal-post {
  font-size: 14px;
  line-height: 18px;
  color: rgb(38, 38, 38);
  font-weight: 600;
}

.craeted-time {
  font-size: 14px;
  color: rgb(115, 115, 115);
  font-weight: 400;
}

.avt-personal-post {
  width: 42px;
  height: 42px;
}

.home-page {
  flex: 1;
  min-width: 1px;
  padding: 30px 0;
  overflow: auto;
}

.feeds-content {
  display: flex;
  gap: 100px;
  justify-content: center;
}

.container {
  display: flex;
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
}

@media (max-width: 415px) {
  .container {
    display: flex;
    flex-direction: column;
  }

  .personal-post.modal {
    display: none;
  }

  .show-comments {
    height: 100%;
  }

  .home-page {
    padding: 10px 0;
  }

  .wrapper-comment {
    padding-left: 5px;
  }

  .post-feel {
    border-bottom: 1px solid gainsboro;
    padding-bottom: 5px;
  }

  .comment-me {
    display: flex;
    flex-direction: column;
    min-height: 600px;
  }

  .comments-modal {
    padding: 0 10px;
  }

}
</style>