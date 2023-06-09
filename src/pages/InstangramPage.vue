<template>
  <div class="container">
    <MenuInstagram/>
    <HeaderInstagramDt/>
    <div class="home-page">
      <div class="feeds-content">
        <div class="home">
          <ListFriendsOnline/>
          <div class="bao-personal-post">
            <div class="personal-post">
              <div class="title-personal-post">
                <img @click="informationFriend"
                     class="avt-personal-post"
                     src="../assets/avt-friend.png"/>
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
            <img class="post-picture" src="../assets/avt.jpg"/>
            <div>
              <div class="emotional-interaction">
                <div class="like-share">
                  <div @click="likePostFriend"
                       id="heart">
                    <i v-if="!like" class="fa-regular fa-heart"></i>
                    <i v-else class="fa-sharp fa-solid fa-heart"></i>
                  </div>
                  <svg @click="commentPost" aria-label="Comment" class="x1lliihq x1n2onr6 emotional-status"
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
                  <svg v-if="!save" aria-label="Save" class="x1lliihq x1n2onr6 save" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
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
              <div class="show-comment">
                <div>
                  <div v-for="comment in commentList"
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
                      <!--                      <p>{{ comment.is_like }}</p>-->
                      <!--                      <i v-if="comment" class="fa-regular fa-heart love"></i>-->
                      <!--                      <i v-else class="fa-sharp fa-solid fa-heart love"></i>-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment">
                <textarea v-model="comment"
                          @keyup.enter="onEnter"
                          class="comment-you"
                          placeholder="Add a comment…">

                </textarea>
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
          <!--          <HomePageInstagram/>-->
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
    <el-dialog custom-class="no-padding-modal no-padding-header"
               :visible.sync="isOpenCommnetModal">
      <div class="comment-me">
        <div>
          <img class="img-post" src="../assets/avt.jpg"/>
        </div>
        <div class="show-comments">
          <div>
            <div class="personal-post modal">
              <div class="title-personal-post">
                <img class="avt-personal-post"
                     src="../assets/avt-friend.png"/>
                <div class="name-personal-post">ane.tdiuz</div>
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
                   src="../assets/avt-friend.png"/>
              <div>
                <div class="name-friend-post">
                  <div class="name-personal-post">ane.tdiuz</div>
                  <div>Đôi khi bỏ lỡ là mất luôn</div>
                </div>
                <div class="time-craeated">
                  <div>17h</div>
                  <div>See translation</div>
                </div>
              </div>
            </div>
          </div>
          <div v-for="item in commentList"
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
                          @keyup.enter="onEnterModal"
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
    <el-dialog title="Share"
               width="600px"
               custom-class="custom-modal"
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

export default {
  components: {
    // HomePageInstagram,
    MenuInstagram,
    ListFriendsOnline,
    SuggestionsPage,
    MenuInstagramDt,
    HeaderInstagramDt
  },
  data() {
    return {
      commentList: [
        {
          id: 1,
          contentComment: 'xinh quá',
          img: 'https://media.istockphoto.com/id/148484407/vi/anh/n%C6%B0%E1%BB%9Bc-anh-%C4%91%C3%A0o-b%E1%BA%AFn-tung-t%C3%B3e.jpg?s=2048x2048&w=is&k=20&c=Xt3L5dqnUHAiLO5XdT0qHh9o07MEwFpYdsIdPMaaFbQ=',
          created_by: {
            id: 'naznaz.hhr',
          },
          is_like: true
        },
        {
          id: 2,
          contentComment: 'Tuyệt vời',
          img: 'https://media.istockphoto.com/id/531162849/vi/anh/ng%C3%B4i-sao-nh%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Puxjm4Bg5lkELXF2dwDDE_Tfbbtgwlr2bxAWzGHBibE=',
          created_by: {
            id: 'ngocba.âhc',
          },
          is_like: true
        }
      ],
      isOpenInformationModal: false,
      isOpenCommnetModal: false,
      isOpenShareModal: false,
      like: false,
      save: false,
      comment: '',
      search: ''
    }
  },
  methods: {
    onEnter() {
      console.log(this.comment)
      const newComment = {
        contentComment: this.comment,
        created_by: {
          id: 'huynhuyn',
        },
        is_like: true

      }
      this.commentList.push(newComment);
      this.comment = '';
    },
    onEnterModal() {
      const newCommentModal = {
        contentComment: this.search,
        img: 'https://media.istockphoto.com/id/531162849/vi/anh/ng%C3%B4i-sao-nh%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Puxjm4Bg5lkELXF2dwDDE_Tfbbtgwlr2bxAWzGHBibE=',
        created_by: {
          id: 'huynhuyn',
        },
        is_like: true
      }
      this.commentList.push(newCommentModal);
      this.search = '';
    },
    savePost(){
      if (!this.save) {
        this.save = true
      } else {
        this.save = false
      }
    },
    informationFriend() {
      this.isOpenInformationModal = true
    },
    commentPost() {
      this.isOpenCommnetModal = true
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
    toggleLike (comment) {
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

.fa-heart-o {
  color: grey;
}

.person-comments {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.comment-me {
  display: flex;
  gap: 5px;
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

.bao-personal-post {
  width: 80%;
  margin: 0 auto;
}

.search-modal {
  border: 0;
  padding: 20px;
}

.share {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: black;
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
.comments-modal {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.time-craeated {
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}

.name-friend-post {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
}

.modal {
  border-bottom: 1px solid grey;
}

.img-post {
  width: 400px;
  height: 550px;
  object-fit: cover;
}

.show-comments {
  position: relative;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: space-between;*/
  width: 50%;
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

.emotional-status:hover {
  cursor: pointer;
  opacity: .5;
}

.interactive-friends:hover {
  cursor: pointer;
}

#heart i {
  color: red;
  cursor: pointer;
  font-size: 24px;
}

.felling-icon:hover {
  cursor: pointer;
  opacity: .5;
}

.save:hover {
  cursor: pointer;
  opacity: .5;
}

.avt-personal-post:hover {
  cursor: pointer;
}

.avt-information {
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
}

.three-cham:hover {
  cursor: pointer;
}

.name-personal-post:hover {
  cursor: pointer;
  color: rgb(114, 114, 114);
}

.liked {
  margin-bottom: 10px;
}

.interactive-friends {
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 0, 0);
  font-weight: 600;
}

.comment-you {
  width: 100%;
  /*padding: 10px;*/
  border: 0;
  border-bottom: 1px solid;
  outline: none;
}

.felling-icon {
  position: absolute;
  top: 13px;
  right: 10px;
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

.comment {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}

.personal-post {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.like-share {
  display: flex;
  gap: 10px;
  align-items: center;
}

.emotional-interaction {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post-picture {
  width: 500px;
  height: 500px;
  margin-bottom: 15px;
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
@media (max-width: 400px) {
  .container{
    display: flex;
    flex-direction: column;
  }
  .home-page{
    padding: 10px 0;
  }

}
</style>