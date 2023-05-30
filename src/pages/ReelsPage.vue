<template>
  <div class="container">
    <MenuInstagram/>
    <div class="video">
      <div class="item-video">
        <img class="thanh-video" src="https://kenh14cdn.com/2016/k2-2-1480327709662.jpg">
        <div class="emotional-interaction">
          <div class="like-share">
            <div>
              <div @click="likePostFriend"
                   id="heart">
                <i v-if="!like" class="fa-regular fa-heart"></i>
                <i v-else class="fa-sharp fa-solid fa-heart"></i>
              </div>
              <div class="interactions">21.7K</div>
            </div>
            <div>
              <svg aria-label="Comment" class="x1lliihq x1n2onr6 emotional-status"
                   color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
                   role="img" viewBox="0 0 24 24" width="24"><title>Comment</title>
                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                      stroke-linejoin="round" stroke-width="2"></path>
              </svg>
              <div class="interactions">6378</div>
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
              <svg v-if="!save" aria-label="Save" class="x1lliihq x1n2onr6 save" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                   height="24"
                   role="img" viewBox="0 0 24 24" width="24"><title>Save</title>
                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                         stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
              </svg>
              <svg v-else aria-label="Remove" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
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
                   src="https://img5.thuthuatphanmem.vn/uploads/2022/01/07/glitter-mask-hnheldinw_025549768.png">
            </div>
          </div>
        </div>
      </div>
      <div class="item-video">
        <img class="thanh-video"
             src="https://vtv1.mediacdn.vn/thumb_w/640/2022/12/23/photo-2-1671785628973971302042.jpg">
        <div class="emotional-interaction">
          <div class="like-share">
            <div @click="likePostFriend"
                 id="heart">
              <i v-if="!like" class="fa-regular fa-heart"></i>
              <i v-else class="fa-sharp fa-solid fa-heart"></i>
              <div>21.7K</div>
            </div>
            <svg aria-label="Comment" class="x1lliihq x1n2onr6 emotional-status"
                 color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
                 role="img" viewBox="0 0 24 24" width="24"><title>Comment</title>
              <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                    stroke-linejoin="round" stroke-width="2"></path>
            </svg>
            <div>21.7K</div>
            <div>
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
            <div>
              <svg aria-label="Save" class="x1lliihq x1n2onr6 save" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                   height="24"
                   role="img" viewBox="0 0 24 24" width="24"><title>Save</title>
                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                         stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
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
                   src="https://img5.thuthuatphanmem.vn/uploads/2022/01/07/glitter-mask-hnheldinw_025549768.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title=""
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
            <input type="radio">
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
            <input type="radio">
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
            <input type="radio">
          </div>
        </div>
        <button class="send">Send</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import MenuInstagram from "@/components/instagram/MenuInstagram.vue";

export default {
  components: {
    MenuInstagram
  },
  data() {
    return {
      like: false,
      save: false,
      isOpenShareModal: false
    }
  },
  methods: {
    likePostFriend() {
      if (!this.like) {
        this.like = true
      } else {
        this.like = false
      }
    },
    savePost(){
      if (!this.save) {
        this.save = true
      } else {
        this.save = false
      }
    },
    openShare(){
      this.isOpenShareModal= true;
    }
  }
}
</script>
<style scoped>
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
  gap: 10px;
  margin: 8px 4px 15px 5px;
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
.modall{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 4px 15px 5px;
}
.wrapper-comment{
  padding-top: 30px;
  padding-left: 10px;
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
  width: 400px;
  height: 700px;
  padding-bottom: 30px;
  border-radius: 8px;
}

</style>