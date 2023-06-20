<template>
  <div class="container">
    <MenuInstagram/>
    <div class="video">
      <div v-for="(video,index) in videoList"
           :key="index"
           class="item-video">
        <img class="thanh-video" :src="video.video">
        <div class="emotional-interaction">
          <div class="like-share">
            <div>
              <i @click="toggleLike(video)" class="fa fa-heart"
                 :class="{ 'fa-sharp fa-solid': video.is_like, 'fa-regular': !video.is_like }"></i>
              <div class="interactions">{{ convertedLikes(video.like_count) }}</div>
            </div>
            <div @click="openModal">
              <svg aria-label="Comment" class="x1lliihq x1n2onr6 emotional-status"
                   color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
                   role="img" viewBox="0 0 24 24" width="24"><title>Comment</title>
                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                      stroke-linejoin="round" stroke-width="2"></path>
              </svg>
              <div class="interactions">{{ convertedComments(video.comment_count) }}</div>
            </div>
            <div @click="openShare">
              <svg aria-label="Share Post" class="x1lliihq x1n2onr6 emotional-status"
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
                   height="24"
                   role="img" viewBox="0 0 24 24" width="24"><title>Remove</title>
                <path
                    d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
              </svg>
            </div>
            <div class="x78zum5 x6s0dn4 xl56j7k xdt5ytf">
              <svg aria-label="More" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)"
                   height="24" role="img" viewBox="0 0 24 24" width="24"><title>More</title>
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="6" cy="12" r="1.5"></circle>
                <circle cx="18" cy="12" r="1.5"></circle>
              </svg>
            </div>
            <div>
              <img class="audio"
                   :src="video.img_music">
            </div>
          </div>
        </div>
      </div>
    </div>
    <MenuInstagramDt/>
    <el-dialog  custom-class="custom-modal-share"
               :visible.sync="isOpenShareModal">
      <div>
        <div>
          <div class="share">share</div>
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
    <el-dialog title="Comment"
               :visible.sync="isOpenCommnetModal"
               custom-class="comment-modal">
      <div class="comment-me">
        <div class="show-comments">
          <div class="coments">
            <div v-for="item in commentList"
                 :key="item.id"
                 class="person-comments">
              <div class="title-personal-post">
                <div class="thong-tin">
                  <img class="avt-personal-post" :src="item.img"/>
                  <div>
                    <div class="created">
                      <div class="interactive-friends">{{ item.created_by.id }}</div>
                      <div>1w</div>
                    </div>
                    <div class="content-comment">
                      {{ item.contentComment }}
                    </div>
                    <div class="created">
                      <div class="reply">Reply</div>
                      <div @click="openSuggest">
                        <svg style="padding-top: 5px;" data-v-48e11fce="" aria-label="More options" color="rgb(0, 0, 0)"
                             fill="rgb(0, 0, 0)" height="24"
                             role="img" viewBox="0 0 24 24" width="24" class="_ab6- three-cham">
                          <circle data-v-48e11fce="" cx="12" cy="12" r="1.5"></circle>
                          <circle data-v-48e11fce="" cx="6" cy="12" r="1.5"></circle>
                          <circle data-v-48e11fce="" cx="18" cy="12" r="1.5"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <i @click="toggleTym(item)" class="fa fa-heart"
                     :class="{ 'fa-sharp fa-solid comment ': item.tym_count, 'fa-regular comment': !item.tym_count }"></i>
                  <div class="interactions">{{ tymComment(item.tym) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="comments-modal">
            <div>
              <div class="comment">
                <input v-model="search"
                       @keyup.enter="onEnterModal"
                       class="comment-you"
                       placeholder="Add a comment…"/>
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
import MenuInstagram from "@/components/instagram/MenuInstagram.vue";
import MenuInstagramDt from "@/components/instagram/MenuInstagramDt.vue";
export default {
  components: {
    MenuInstagram,
    MenuInstagramDt
  },
  data() {
    return {
      like: false,
      tym: false,
      save: false,
      isOpenShareModal: false,
      isOpenCommnetModal: false,
      search: '',
      commentList: [
        {
          id: 1,
          contentComment: 'xinh quá',
          img: 'https://kenh14cdn.com/2016/k2-2-1480327709662.jpg',
          created_by: {
            id: 'naznaz.hhr',
          },
          create_time: '',
          is_like: true,
          tym_count: false,
          tym: 19
        },
        {
          id: 2,
          contentComment: 'Tuyệt vời',
          img: 'https://media.istockphoto.com/id/148484407/vi/anh/n%C6%B0%E1%BB%9Bc-anh-%C4%91%C3%A0o-b%E1%BA%AFn-tung-t%C3%B3e.jpg?s=2048x2048&w=is&k=20&c=Xt3L5dqnUHAiLO5XdT0qHh9o07MEwFpYdsIdPMaaFbQ=',
          created_by: {
            id: 'ngocba.âhc',
          },
          is_like: true,
          tym_count: false,
          tym: 20
        }
      ],
      videoList: [
        {
          id: 1,
          video: 'https://kenh14cdn.com/2016/k2-2-1480327709662.jpg',
          like_count: 10043,
          comment_count: 2000,
          img_music: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/glitter-mask-hnheldinw_025549768.png',
          is_like: false
        },
        {
          id: 2,
          video: 'https://media.istockphoto.com/id/1397444575/vi/anh/phong-c%C3%A1ch-h%E1%BA%A1nh-ph%C3%BAc-m%E1%BB%89m-c%C6%B0%E1%BB%9Di-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-m%E1%BB%B9-g%E1%BB%91c-phi-%C4%91eo-tai-nghe-v%C3%A0-nghe-nh%E1%BA%A1c-trong-n%E1%BB%81n-ph%C3%B2ng.jpg?s=2048x2048&w=is&k=20&c=EICgb5CwbHI3T9dVihc-rndQv0zWZWlKfJe3XK1AsAk=',
          like_count: 3028,
          comment_count: 43672,
          img_music: 'https://media.istockphoto.com/id/1397444575/vi/anh/phong-c%C3%A1ch-h%E1%BA%A1nh-ph%C3%BAc-m%E1%BB%89m-c%C6%B0%E1%BB%9Di-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-m%E1%BB%B9-g%E1%BB%91c-phi-%C4%91eo-tai-nghe-v%C3%A0-nghe-nh%E1%BA%A1c-trong-n%E1%BB%81n-ph%C3%B2ng.jpg?s=2048x2048&w=is&k=20&c=EICgb5CwbHI3T9dVihc-rndQv0zWZWlKfJe3XK1AsAk=',
          is_like: false,
        }
      ]
    }
  },
  methods: {
    onEnterModal() {
      const newCommentModal = {
        contentComment: this.search,
        img: 'https://media.istockphoto.com/id/531162849/vi/anh/ng%C3%B4i-sao-nh%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Puxjm4Bg5lkELXF2dwDDE_Tfbbtgwlr2bxAWzGHBibE=',
        created_by: {
          id: 'huynhuyn',
        },
        is_like: true,
        tym_count: false,
        tym: 0
      }
      this.commentList.push(newCommentModal);
      this.search = '';
    },
    toggleLike(video) {
      video.is_like = !video.is_like;
    },
    toggleTym(item) {
      item.tym_count = ! item.tym_count;
      if(item.tym_count == true){
         item.tym ++
      }else {
        item.tym--
      }
    },
    likePostFriend() {
      if (!this.like) {
        this.like = true
      } else {
        this.like = false
      }
    },
    tymComment(item){
      console.log(item)
      return item +=1
    },
    openSuggest() {

    },
    convertedLikes(like) {
      if (like >= 1000000) {
        return ((like / 1000000).toFixed(1) + 'M')
      } else if (1000 < like < 1000000) {
        return ((like / 1000).toFixed(1) + 'k')
      }
      return like;
    },
    convertedComments(comment) {
      if (comment >= 1000000) {
        return ((comment / 1000000).toFixed(1) + 'M')
      } else if (1000 < comment < 1000000) {
        return ((comment / 1000).toFixed(1) + 'k')
      }
      return comment;
    },
    openModal() {
      this.isOpenCommnetModal = true
    },
    savePost() {
      if (!this.save) {
        this.save = true
      } else {
        this.save = false
      }
    },
    onEnter() {

    },
    openShare() {
      this.isOpenShareModal = true;
    }
  }
}
</script>
<style scoped>
.avt-personal-post:hover {
  cursor: pointer;
}
.comment{
  font-size: 10px;
}
.reply {
  font-weight: 500;
}

.thong-tin {
  display: flex;
  align-items: center;
  gap: 10px;
}

/*.fa-heart {*/
/*  color: red;*/
/*}*/
.fa-heart-o {
  color: grey;
}

.fa {
  font-size: 20px;
  color: grey;
  cursor: pointer;
}

.three-cham {
  opacity: 0;
}

.person-comments:hover .three-cham {
  opacity: 1;
}

.created {
  display: flex;
  gap: 10px;
  align-items: center;
}

.felling-icon {
  position: absolute;
  right: 17px;
  top: 12px;
  font-size: 18px;
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

.comment {
  position: relative;
}

.comment-you {
  width: 100%;
  border-radius: 20px;
  /*border: grey;*/
  padding: 8px 21px;
}

.avt-personal-post {
  width: 42px;
  height: 42px;
  border-radius: 999px;
}

.share {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: black;
}

.craeted-time {
  font-size: 14px;
  color: rgb(115, 115, 115);
  font-weight: 400;
  width: 100px;
}

.name-personal-post {
  font-size: 14px;
  line-height: 18px;
  color: rgb(38, 38, 38);
  font-weight: 600;
}

.title-personal-post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 8px 4px 15px 5px;
  padding-bottom: 10px;
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
  display: flex;
}

.suggest {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: black;
}

.modall {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 4px 15px 5px;
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

.container {
  background: #FFFFFF;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: auto;
}

.fa-heart {
  color: red;
}

.like-share svg {
  font-size: 24px;
}

.interactions {
  font-size: 13px;
  font-weight: 400;
}

.fa-heart {
  font-size: 24px;
}

.audio {
  width: 20px;
  border-radius: 2px;
}

.emotional-interaction {
  position: absolute;
  bottom: 32px;
  right: -65px;
}

.like-share {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
}

.video {
  display: grid;
  grid-template-columns: 1fr;
  overflow: auto;
  flex: 1;
  min-width: 1px;
  width: 100%;
  padding: 35px 0;

}

.item-video {
  position: relative;
  margin: 0 auto;
  display: flex;
  gap: 20px;
}

.item-video .thanh-video {
  width: 382px;
  height: 623px;
  padding-bottom: 30px;
  border-radius: 8px;
}
@media (max-width: 768px) {
  .item-video .thanh-video{
    width: 334px;
    height: 602px;
  }

}
@media (max-width: 415px) {
  .video{
    padding: 0;
  }
  .item-video .thanh-video{
    width: 100%;
    border-radius: 0;
  }
  .emotional-interaction[data-v-0d389458] {
    position: absolute;
    bottom: 49px;
    right: 8px;
  }
  .container{
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  .comment-you{
    padding: 12px 21px;
  }
  .fa-heart.comment {
    font-size: 14px;
  }
  .reply {
    font-size: 12px;
  }
}
</style>