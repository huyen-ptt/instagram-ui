<template>
  <div class="container">
    <MenuInstagram/>
    <div class="o-nhap">
      <svg aria-label="Search" class="x1lliihq x1n2onr6 icon-search" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)"
           height="16" role="img" viewBox="0 0 24 24" width="16"><title>Search</title>
        <path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              x1="16.511" x2="22" y1="16.511" y2="22"></line>
      </svg>
      <input class="search" type="text" placeholder="Search..."/>
    </div>
    <div class="icon">
      <div v-for="(imgGroup, index) in imgList"
           :key="index"
           class="item-icon-wrapper"
           :class="{ 'item-icon-wrapper-right': index % 2 === 1}">
        <div v-if="index % 2 === 0"
             @click="informationIconLarge(imgGroup)"
             class="item-icon large-image">
          <img :src="imgGroup.largeImg.img">
          <div class="favorite-icon">
            <div class="favorite-icon-con">
              <div class="trang-thai">
                <i class="fa-solid fa-heart"></i>
                <div>{{ convertedLikes(imgGroup.largeImg.like_count) }}</div>
              </div>
              <div class="trang-thai">
                <i class="fa-solid fa-comment"></i>
                <div>{{ convertedComments(imgGroup.largeImg.comment_count) }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="small-images-wrapper">
          <div v-for="(imgData, i) in imgGroup.smallImages"
               @click="informationIconSmall(imgData)"
               :key="i"
               class="item-icon">
            <img :src="imgData.img">
            <div class="favorite-icon">
              <div class="favorite-icon-con">
                <div class="trang-thai">
                  <i class="fa-solid fa-heart"></i>
                  <div>{{ convertedLikes(imgData.like_count) }}</div>
                </div>
                <div class="trang-thai">
                  <i class="fa-solid fa-comment"></i>
                  <div>{{ convertedComments(imgData.comment_count) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="index % 2 === 1"
             class="item-icon large-image"
             @click="informationIconLarge(imgGroup)">
          <img :src="imgGroup.largeImg.img">
          <div class="favorite-icon">
            <div class="favorite-icon-con">
              <div class="trang-thai">
                <i class="fa-solid fa-heart"></i>
                <div>{{ convertedLikes(imgGroup.largeImg.like_count) }}</div>
              </div>
              <div class="trang-thai">
                <i class="fa-solid fa-comment"></i>
                <div>{{ convertedComments(imgGroup.largeImg.comment_count) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MenuInstagramDt/>
    <el-dialog custom-class="no-padding-modal no-padding-header comments"
               :show-close="false"
               :visible.sync="isOpenCommnetModal">
      <div class="comment-me">
        <div>
          <img class="img-post"
               :src="currentImage?.img"/>
        </div>
        <div class="show-comments">
          <div>
            <div class="personal-post modal">
              <div class="main-master">
                <div class="title-personal-post">
                  <img class="avt-personal-post"
                       :src="currentImage?.creator.avt"/>
                  <div class="name-personal-post">{{ currentImage?.creator.name }}</div>
                </div>
                <div style="padding-bottom: 10px;color: rgb(0 149 246);font-weight: 600;cursor: pointer">
                  follow
                </div>
              </div>
              <div>
                <svg aria-label="More options" class="_ab6- three-cham" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                     height="24"
                     role="img"
                     viewBox="0 0 24 24" width="24">
                  <circle cx="12" cy="12" r="1.5"></circle>
                  <circle cx="6" cy="12" r="1.5"></circle>
                  <circle cx="18" cy="12" r="1.5"></circle>
                </svg>
              </div>
            </div>
          </div>
          <div class="wrapper-comment">
            <div v-for="comment in commentList"
                 :key="comment.id"
                 class="comments">
              <div>
                <img class="avt-personal-post" :src="comment.img"/>
              </div>
              <div>
                <div class="commentt">
                  <div class="name-personal-post">{{ comment.created_by.id }}</div>
                  <div class="content-comment">{{ comment.contentComment }}</div>
                </div>
                <div class="created">
                  <div>1M</div>
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
          </div>
          <div class="like-comment">
            <div>
              <div class="emotional-interaction">
                <div class="like-share">
                  <div>
                    <div @click="likePostFriend(currentImage)"
                         id="heart">
                      <i v-if="!like" class="fa-regular fa-heart"></i>
                      <i v-else class="fa-sharp fa-solid fa-heart"></i>
                    </div>
                  </div>
                  <svg aria-label="Comment" class="x1lliihq x1n2onr6 emotional-status"
                       color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
                       role="img" viewBox="0 0 24 24" width="24"><title>Comment</title>
                    <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                          stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                  <svg @click="openShare" aria-label="Share Post" class="x1lliihq x1n2onr6 emotional-status"
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
              </div>
              <div class="liked">
                <div class="interactive-friends">
                  {{ countLikes(currentImage?.like_count) }}
                </div>
                <div class="update">November 2,22</div>
              </div>
            </div>
            <div>
              <div class="comment">
                <textarea @keyup.enter="onEnter"
                          v-model="search"
                          class="comment-you"
                          placeholder="Add a comment…"></textarea>
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
    </el-dialog>
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
    <el-dialog title=""
               :visible.sync="isOpenSuggestModal"
               class="modal-suggest">
      <div>
        <div @click="reportlModal" class="report">Report</div>
        <div @click="cancelModal"
             class="cancel">Cancel
        </div>
      </div>
    </el-dialog>
    <el-dialog title=""
               :visible.sync="isOpenReportModal"
               class="modal-suggest">
      <div class="wrapper-report">
        <div>Report</div>
        <div class="item">Why are you reporting this comment?</div>
        <div class="item">
          <div>It's spam</div>
          <svg aria-label="chevron" class="x1lliihq x1n2onr6" color="rgb(199, 199, 199)" fill="rgb(199, 199, 199)"
               height="17" role="img" viewBox="0 0 24 24" width="17"><title>chevron</title>
            <path
                d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
          </svg>
        </div>
        <div class="item">
          <div>Nudity or sexual activity</div>
          <svg aria-label="chevron" class="x1lliihq x1n2onr6" color="rgb(199, 199, 199)" fill="rgb(199, 199, 199)"
               height="17" role="img" viewBox="0 0 24 24" width="17"><title>chevron</title>
            <path
                d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
          </svg>
        </div>
        <div class="item">
          <div>Hate speech or symbols</div>
          <svg aria-label="chevron" class="x1lliihq x1n2onr6" color="rgb(199, 199, 199)" fill="rgb(199, 199, 199)"
               height="17" role="img" viewBox="0 0 24 24" width="17"><title>chevron</title>
            <path
                d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
          </svg>
        </div>
        <div class="item">
          <div>Violence or dangerous organizations</div>
          <svg aria-label="chevron" class="x1lliihq x1n2onr6" color="rgb(199, 199, 199)" fill="rgb(199, 199, 199)"
               height="17" role="img" viewBox="0 0 24 24" width="17"><title>chevron</title>
            <path
                d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
          </svg>
        </div>
        <div class="item">
          <div>Sale of illegal or regulated goods</div>
          <svg aria-label="chevron" class="x1lliihq x1n2onr6" color="rgb(199, 199, 199)" fill="rgb(199, 199, 199)"
               height="17" role="img" viewBox="0 0 24 24" width="17"><title>chevron</title>
            <path
                d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
          </svg>
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
      imgList: [
        {
          largeImg: {
            id: 1,
            img: 'https://kenh14cdn.com/2016/k2-2-1480327709662.jpg',
            like_count: 1805994,
            comment_count: 20700,
            creator: {
              name: 'hannar',
              avt: 'https://images.unsplash.com/photo-1593601680767-3a289f3761aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80'
            }
          },
          smallImages:
              [
                {
                  id: 2,
                  img: 'https://images.unsplash.com/photo-1611200945005-403b70229452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                  like_count: 1070,
                  comment_count: 2400,
                  creator: {
                    name: 'ngnh_hbf',
                    avt: 'https://images.unsplash.com/photo-1581508604398-60e52b0af39c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
                  }
                },
                {
                  id: 3,
                  img: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png',
                  like_count: 1500,
                  comment_count: 2600,
                  creator: {
                    name: 'udui.dg',
                    avt: 'https://images.unsplash.com/photo-1611864444643-457fb0e29009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                  }
                },
                {
                  id: 4,
                  img: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/gliter-cat-2zz3v_025742551.png',
                  like_count: 1070,
                  comment_count: 2030,
                  creator: {
                    name: 'hnuhe.hf',
                    avt: 'https://images.unsplash.com/photo-1586723815262-83713dcfbfa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'
                  }
                },
                {
                  id: 5,
                  img: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/bird-crown-emmyy_025904055.png',
                  like_count: 1020,
                  comment_count: 2400,
                  creator: {
                    name: 'thah_hueyn',
                    avt: 'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  }
                },
              ],
        },
        {
          largeImg: {
            id: 6,
            img: 'https://images.unsplash.com/photo-1581508604398-60e52b0af39c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
            like_count: 1300,
            comment_count: 2040,
            creator: {
              name: 'hahah_hd',
              avt: 'https://images.unsplash.com/photo-1611200945005-403b70229452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            }
          },
          smallImages:
              [
                {
                  id: 7,
                  img: 'https://images.unsplash.com/photo-1580529642221-eb86b38636ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
                  like_count: 4000,
                  comment_count: 2000,
                  creator: {
                    name: 'bicngoc',
                    avt: 'https://images.unsplash.com/photo-1580529642221-eb86b38636ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
                  }
                },
                {
                  id: 8,
                  img: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png',
                  like_count: 6000,
                  comment_count: 2000,
                  creator: {
                    name: 'cici.hn',
                    avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png'
                  }
                },
                {
                  id: 9,
                  img: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/gliter-cat-2zz3v_025742551.png',
                  like_count: 5000,
                  comment_count: 2000,
                  creator: {
                    name: 'hywe.hn',
                    avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png'
                  }
                },
                {
                  id: 10,
                  img: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/bird-crown-emmyy_025904055.png',
                  like_count: 7000,
                  comment_count: 2000,
                  creator: {
                    name: 'ha78qbd.hn',
                    avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png'
                  }
                },
              ],
        },
        {
          largeImg: {
            id: 11,
            img: 'https://images.unsplash.com/photo-1609043239075-b84f30707c63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            like_count: 1000,
            comment_count: 2000,
            creator: {
              name: 'ywusn.hn',
              avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png'
            }
          },
          smallImages:
              [
                {
                  id: 12,
                  img: 'https://kenh14cdn.com/2016/k2-2-1480327709662.jpg', like_count: 1000,
                  comment_count: 2000,
                  creator: {
                    name: 'hihi.hn',
                    avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png'
                  }
                },
                {
                  id: 13,
                  img: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png',
                  like_count: 1000,
                  comment_count: 2000,
                  creator: {
                    name: 'luluy.hn',
                    avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png'
                  }
                },
                {
                  id: 14,
                  img: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/gliter-cat-2zz3v_025742551.png',
                  like_count: 1000,
                  comment_count: 2000,
                  creator: {
                    name: 'hazz.hds',
                    avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/gliter-cat-2zz3v_025742551.png'
                  }
                },
                {
                  id: 15,
                  img: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/bird-crown-emmyy_025904055.png',
                  like_count: 1000,
                  comment_count: 2000,
                  creator: {
                    name: 'huynHuyn.hn',
                    avt: 'https://img5.thuthuatphanmem.vn/uploads/2022/01/07/sparkles-instagram_025613402.png'
                  }
                },
              ],
        }
      ],
      commentList: [
        {
          id: 1,
          contentComment: 'xinh quá',
          img: 'https://media.istockphoto.com/id/531162849/vi/anh/ng%C3%B4i-sao-nh%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Puxjm4Bg5lkELXF2dwDDE_Tfbbtgwlr2bxAWzGHBibE=',
          created_by: {
            id: 'naznaz.hhr',
          },
          create_time: '',
          is_like: true
        },
        {
          id: 2,
          contentComment: 'Tuyệt vời',
          img: 'https://media.istockphoto.com/id/148484407/vi/anh/n%C6%B0%E1%BB%9Bc-anh-%C4%91%C3%A0o-b%E1%BA%AFn-tung-t%C3%B3e.jpg?s=2048x2048&w=is&k=20&c=Xt3L5dqnUHAiLO5XdT0qHh9o07MEwFpYdsIdPMaaFbQ=',
          created_by: {
            id: 'ngocba.âhc',
          },
          is_like: true
        }
      ],
      isOpenCommnetModal: false,
      search: '',
      currentTime: null,
      isOpenShareModal: false,
      isOpenSuggestModal: false,
      isOpenReportModal: false,
      like: false,
      save: false,
      currentImage: null
    }
  },
  methods: {
    convertedLikes(like) {
      if (like >= 1000000) {
        return ((like / 1000000).toFixed(1) + 'M')
      } else if (1000 < like < 1000000) {
        return ((like / 1000).toFixed(1) + 'k')
      }
      return like;
    },
    countLikes(like) {
      if (like !== undefined) {
        const number = like;
        return number.toLocaleString();
      }
      return 0
    },
    convertedComments(comment) {
      if (comment >= 1000000) {
        return ((comment / 1000000).toFixed(1) + 'M')
      } else if (1000 < comment < 1000000) {
        return ((comment / 1000).toFixed(1) + 'k')
      }
      return comment;
    },
    openShare() {
      this.isOpenShareModal = true
    },
    openSuggest() {
      this.isOpenSuggestModal = true
    },
    cancelModal() {
      this.isOpenSuggestModal = false
    },
    reportlModal() {
      this.isOpenReportModal = true
    },
    informationIconLarge(img) {
      this.isOpenCommnetModal = true
      this.currentImage = img.largeImg
      // this.currentImage = img.smallImages
    },
    informationIconSmall(img) {
      this.isOpenCommnetModal = true
      this.currentImage = img
    },
    onEnter() {
      const newComment = {
        contentComment: this.search,
        img: 'https://media.istockphoto.com/id/531162849/vi/anh/ng%C3%B4i-sao-nh%C3%AD.jpg?s=2048x2048&w=is&k=20&c=Puxjm4Bg5lkELXF2dwDDE_Tfbbtgwlr2bxAWzGHBibE=',
        created_by: {
          id: 'huynhuyn',
        },
      }
      this.commentList.push(newComment);
      this.search = '';
    },
    likePostFriend(item) {
      if (!this.like) {
        this.like = true
        item.like_count ++
      } else {
        this.like = false
        item.like_count --
      }
    },
    savePost() {
      if (!this.save) {
        this.save = true
      } else {
        this.save = false
      }
    }
  }
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
<style scoped lang="scss">
.search {
  display: none;
}

.small-images-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.item-icon-wrapper {
  display: grid;
  grid-template-columns: 33% 1fr;

  &.item-icon-wrapper-right {
    grid-template-columns: 1fr 33%;
  }
}

.modal-suggest {
  width: 700px;
  margin: 0 auto;
}

.item {
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid grey;
}

.favorite-icon-con {
  display: flex;
  gap: 30px;
  margin: 0 auto;
}

.wrapper-report {
  width: 900px;
  margin: 0 auto;
}

.report {
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
  text-align: center;
  color: rgb(237, 73, 86);
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
}

.cancel {
  text-align: center;
  padding-top: 20px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}

.share {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: black;
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

.wrapper-comment {
  padding-top: 30px;
  padding-left: 10px;
  flex: 1;
  min-height: 1px;
  overflow: auto;
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
  display: flex;
  background: #FFFFFF;
  width: 100%;
  height: 100vh;
  overflow: auto;
}

.interactive-friends {
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 0, 0);
  font-weight: 600;
}

.three-cham {
  opacity: 0;
}

.comments:hover .three-cham {
  opacity: 1;
}

.created {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  cursor: pointer;
}

.reply {
  font-weight: 500;
}

.commentt {
  display: flex;
  align-items: center;
  gap: 4px;
}

.comments {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-bottom: 17px;
}

.comment-me {
  gap: 5px;
  height: 70vh;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.update {
  font-size: 12px;
  padding-top: 3px;
}

.avt-personal-post:hover {
  cursor: pointer;
}

.avt-personal-post {
  width: 42px;
  height: 42px;
  border-radius: 999px;
}

.show-comments {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 1px;
}

/*.wrapper-comment{*/
/*  position: fixed;*/
/*  bottom: 30px;*/
/*}*/
.main-master {
  display: flex;
  align-items: center;
  gap: 4px;
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

.personal-post {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.img-post {
  width: 100%;
  height: 100%;
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

.like-comment {
  width: 100%;
}

.name-personal-post {
  font-size: 14px;
  line-height: 18px;
  color: rgb(38, 38, 38);
  font-weight: 600;
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

.felling-icon:hover {
  cursor: pointer;
  opacity: .5;
}

felling-icon {
  position: absolute;
  top: 13px;
  right: 10px;
}

.comment-you {
  width: 100%;
  /*padding: 10px;*/
  border: 0;
  border-bottom: 1px solid;
  outline: none;
}

.save:hover {
  cursor: pointer;
  opacity: .5;
}

.comment {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}

.liked {
  margin-bottom: 10px;
  cursor: pointer;
}

#heart i {
  color: red;
  cursor: pointer;
  font-size: 24px;
}

.fa-heart {
  color: red;
}

.emotional-status:hover {
  cursor: pointer;
  opacity: .5;
}

.name-personal-post:hover {
  cursor: pointer;
  color: rgb(114, 114, 114);
}

.trang-thai {
  display: flex;
  align-items: center;
  gap: 2px;
  color: #FFFFFF;
  font-weight: 500;
}

.trang-thai i {
  color: #FFFFFF;
}

.favorite-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  //transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  align-items: center;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.item-icon-wrapper {
  .item-icon {
    position: relative;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.6);

      .favorite-icon {
        opacity: 1;
      }
    }
  }
}

.icon {
  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  overflow: auto;
  flex: 1;
  min-width: 1px;
  padding: 0 120px;
}

.icon img {
  padding: 2px;
  height: 100%;
}

@media (max-width: 768px) {
  .icon {
    padding: 20px;
  }
  .search {
    display: none;
  }
  .o-nhap{
    display: none;
  }
  .item-icon-wrapper{
    gap:25px;
  }
  .small-images-wrapper{
    gap:25px;
  }
}

@media (max-width: 415px) {
  .container {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
  }
  .img-post{
    max-height: 300px;
    object-fit: cover;
  }
  .comment-you{
    border-bottom: 0;
  }
  .search {
    display: block;
    padding: 6px 44px;
    width: 100%;
    color: rgb(115, 115, 115);
    background: rgb(239, 239, 239);
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;
    border-radius: 10px;
    border: 0;
  }
  .wrapper-comment{
    padding-left:5px ;
  }
  .comment-me{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .wrapper-comment{
    max-height: 200px;
    overflow: auto;
  }
  .like-comment{
    padding: 0 5px;
  }
  .avt-personal-post{
    width: 30px;
    height: 30px;
  }
  .name-personal-post{
    font-size: 13px;
    line-height: 14px;
    color: rgb(38, 38, 38);
    font-weight: 500;
  }
  .content-comment{
    font-size: 12px;
  }
  .icon-search{
    position: absolute;
    top:14px;
    left: 18px;
  }
  .o-nhap{
    position: relative;
  }
}
</style>