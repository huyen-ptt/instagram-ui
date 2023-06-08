<template>
  <div class="container">
    <MenuInstagram/>
    <div class="body-messenger">
      <div class="home-messenger">
        <div class="conversation">
          <div class="footer-conversation">
            <div class="name">
              <div class="name-me">Huyn.huyn</div>
              <svg aria-label="Down chevron icon" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="12"
                   role="img" viewBox="0 0 24 24" width="12">
                <path
                    d="M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z"></path>
              </svg>
            </div>
            <div>
              <svg aria-label="New message" class="x1lliihq x1n2onr6 new-message" color="rgb(0, 0, 0)"
                   fill="rgb(0, 0, 0)" height="24"
                   role="img" viewBox="0 0 24 24" width="24"><title>New message</title>
                <path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none"
                      stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <path
                    d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"></path>
                <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line>
              </svg>
            </div>
          </div>
          <div class="title-messenger">
            <h4>Messages</h4>
            <div class="requests">Requests</div>
          </div>
          <div class="wrapper-friends">
            <div v-for="(friend, index) in friendList"
                 :key="index"
                 class="item-friends">
              <div>
                <img :src="friend.avt" class="avt-friend"/>
              </div>
              <div class="bao-content">
                <div class="name-friends">{{ friend.name_friend }}</div>
                <div class="content-friend">{{ friend.content }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-messenger">
        </div>
      </div>
      <div class="noi-dung">
        <div class="bao-noi-dung">
          <div class="header-noi-dung">
            <div class="item-friends">
              <div>
                <img class="avt"
                     src="https://images.unsplash.com/photo-1580908343124-72e0a786c588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1795&q=80">
              </div>
              <div class="bao-content">
                <div class="name-friends">Phạm Thị Hoa</div>
                <div class="content-friend">active 4h ago</div>
              </div>
            </div>
          </div>
          <div class="toolbar">
            <el-switch v-model="changeContent">
            </el-switch>
            <svg aria-label="Audio call" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img"
                 viewBox="0 0 24 24" width="24">
              <path
                  d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z"></path>
            </svg>
            <svg aria-label="Video call" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img"
                 viewBox="0 0 24 24" width="24">
              <rect fill="none" height="18" rx="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" width="16.999" x="1" y="3"></rect>
              <path d="m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854"
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"></path>
            </svg>
            <svg aria-label="Conversation information" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)"
                 fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Conversation
              information</title>
              <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"></circle>
              <circle cx="11.819" cy="7.709" r="1.25"></circle>
              <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line>
              <polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
            </svg>
          </div>
        </div>
        <div class="bao-contents">
          <div class="user-friend">
            <div>
              <img class="user-avt"
                   src="https://images.unsplash.com/photo-1580908343124-72e0a786c588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1795&q=80"/>
              <div class="user-name">Phạm Thị Hoa</div>
              <div class="user-nickname">_p.hoza3_ · Instagram</div>
            </div>
            <button class="btn-profile">View profile</button>
          </div>
          <div class="chat">
            <div v-for="content in messageList"
                 :key="content.id"
                 class="chat-item">
              <div style="display: flex; gap: 10px">
                <div v-if="!content.is_me" class="avt-me">
                  <img class="avt"
                       :src="content.created_by.avatar"/>
                  <div class="is-active"></div>
                </div>
                <div :class="getClass(content.is_me)">
                  <div v-if="!content.is_me">
                    {{ content.content }}
                    <div class="feeling-right">
                      <svg aria-label="Reaction" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                           height="16" role="img" viewBox="0 0 24 24" width="16"><title>Reaction</title>
                        <path
                            d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                      </svg>
                      <svg aria-label="Reply" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                           height="16" role="img" viewBox="0 0 24 24" width="16"><title>Reply</title>
                        <path
                            d="M14 8.999H4.413l5.294-5.292a1 1 0 1 0-1.414-1.414l-7 6.998c-.014.014-.019.033-.032.048A.933.933 0 0 0 1 9.998V10c0 .027.013.05.015.076a.907.907 0 0 0 .282.634l6.996 6.998a1 1 0 0 0 1.414-1.414L4.415 11H14a7.008 7.008 0 0 1 7 7v3.006a1 1 0 0 0 2 0V18a9.01 9.01 0 0 0-9-9Z"></path>
                      </svg>
                      <svg aria-label="More" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                           height="16" role="img" viewBox="0 0 24 24" width="16"><title>More</title>
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                      </svg>
                    </div>
                  </div>
                  <div v-else>
                    <div class="content-chat">
                      {{ content.content }}
                      <div class="feeling-left">
                        <svg aria-label="Reaction" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                             height="16" role="img" viewBox="0 0 24 24" width="16"><title>Reaction</title>
                          <path
                              d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                        </svg>
                        <svg aria-label="Reply" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                             height="16" role="img" viewBox="0 0 24 24" width="16"><title>Reply</title>
                          <path
                              d="M14 8.999H4.413l5.294-5.292a1 1 0 1 0-1.414-1.414l-7 6.998c-.014.014-.019.033-.032.048A.933.933 0 0 0 1 9.998V10c0 .027.013.05.015.076a.907.907 0 0 0 .282.634l6.996 6.998a1 1 0 0 0 1.414-1.414L4.415 11H14a7.008 7.008 0 0 1 7 7v3.006a1 1 0 0 0 2 0V18a9.01 9.01 0 0 0-9-9Z"></path>
                        </svg>
                        <svg aria-label="More" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                             height="16" role="img" viewBox="0 0 24 24" width="16"><title>More</title>
                          <circle cx="12" cy="12" r="1.5"></circle>
                          <circle cx="6" cy="12" r="1.5"></circle>
                          <circle cx="18" cy="12" r="1.5"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--      <div class="date-chat">Thursday 24, 2022</div>-->
          </div>
        </div>
        <div class="o-nhap">
          <svg aria-label="Choose an emoji" class="x1lliihq x1n2onr6 icon" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
               height="24" role="img" viewBox="0 0 24 24" width="24"><title>Choose an emoji</title>
            <path
                d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
          </svg>
          <input v-model="search"
                 @keyup.enter="enterSearch"
                 class="nhap-tin-nhan"
                 type="text"
                 placeholder="Messeger..."/>
          <div class="wrapper-icon">
            <svg aria-label="Voice Clip" class="x1lliihq x1n2onr6 mic" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)"
                 height="24" role="img" viewBox="0 0 24 24" width="24"><title>Voice Clip</title>
              <path d="M19.5 10.671v.897a7.5 7.5 0 0 1-15 0v-.897" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="12" x2="12"
                    y1="19.068" y2="22"></line>
              <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    x1="8.706" x2="15.104" y1="22" y2="22"></line>
              <path d="M12 15.745a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v5.745a4 4 0 0 1-4 4Z" fill="none"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
            <svg aria-label="Add Photo or Video" class="x1lliihq x1n2onr6 add-photo" color="rgb(0, 0, 0)"
                 fill="rgb(0, 0, 0)"
                 height="24" role="img" viewBox="0 0 24 24" width="24"><title>Add Photo or Video</title>
              <path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z"
                    fill-rule="evenodd"></path>
              <path
                  d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905"
                  fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
              <path
                  d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"></path>
            </svg>
            <svg aria-label="Like" class="x1lliihq x1n2onr6 like" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
                 role="img" viewBox="0 0 24 24" width="24"><title>Like</title>
              <path
                  d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import MenuInstagram from "@/components/instagram/MenuInstagram.vue";
// import moment from "moment/moment";

export default {
  components: {
    MenuInstagram
  },
  data() {
    return {
      search: '',
      changeContent: true,
      friendList: [
        {
          id: 1,
          avt: 'https://images.unsplash.com/photo-1580908343124-72e0a786c588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1795&q=80',
          name_friend: 'Phạm Thị Hoa',
          content: 'active 4h ago'
        },
        {
          id: 2,
          avt: 'https://images.unsplash.com/photo-1606996251932-0ebaf25eb954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          name_friend: 'Ngọc Huyền',
          content: 'active 12h ago'
        },
        {
          id: 3,
          avt: 'https://images.unsplash.com/photo-1616540732763-6a2368545a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=452&q=80',
          name_friend: 'Bích Ngọc',
          content: 'Chị ăn chưa'
        },
        {
          id: 4,
          avt: 'https://images.unsplash.com/photo-1581508881039-f7536559ce57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
          name_friend: 'Lan Ichi',
          content: 'Học đi cu'
        },
        {
          id: 5,
          avt: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=399&q=80',
          name_friend: 'Việt Hoàng',
          content: 'active 1h ago'
        },
        {
          id: 6,
          avt: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
          name_friend: 'Bùi Linh',
          content: 'Hello'
        },
        {
          id: 7,
          avt: 'https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
          name_friend: 'Huyền Chang',
          content: 'Oki nhé'
        },
        {
          id: 8,
          avt: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          name_friend: 'Jonh',
          content: 'active 1h ago'
        },
        {
          id: 9,
          avt: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
          name_friend: 'Tú anh',
          content: 'active 23h ago'
        },
      ],
      messageList: [
        {
          id: 1,
          content: 'Ăn cơm chưa',
          created_time: 1680872373,
          created_by: {
            id: 'Phạm THị Hoa',
            avatar: 'https://images.unsplash.com/photo-1580908343124-72e0a786c588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1795&q=80',
          },
          is_me: false
        },
        {
          id: 2,
          content: 'Chưa',
          created_time: 1680872373,
          created_by: {
            id: 'Huyeenf',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          },
          is_me: true
        },
        {
          id: 3,
          content: 'Làm gì à',
          created_time: 1680872373,
          created_by: {
            id: 'Huyeenf',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          },
          is_me: true
        },
        {
          id: 4,
          content: 'Đi uống nước không',
          created_time: 1680872373,
          created_by: {
            id: 'Phạm Thị Hoa',
            avatar: 'https://images.unsplash.com/photo-1580908343124-72e0a786c588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1795&q=80',
          },
          is_me: false
        },
        {
          id: 5,
          content: 'Đi',
          created_time: 1680872373,
          created_by: {
            id: 'Huyeenf',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          },
          is_me: true
        },
        {
          id: 6,
          content: 'Mấy giờ',
          created_time: 1680872373,
          created_by: {
            id: 'Phạm Thị Hoa',
            avatar: 'https://images.unsplash.com/photo-1580908343124-72e0a786c588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1795&q=80',
          },
          is_me: false
        },
        {
          id: 7,
          content: '7h',
          created_time: 1680872373,
          created_by: {
            id: 'Huyeenf',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          },
          is_me: true
        },
      ]
    }
  },
  methods: {
    getClass(is_me) {
      if (is_me) {
        return 'chat-me'
      }
      return 'chat-you'
    },
    enterSearch() {
      const timeStamp = new Date().getTime() / 1000;
      if(this.changeContent === true){
        const newChatMe = {
          content: this.search,
          created_time: timeStamp,
          is_me: true,
        }
        this.messageList.push(newChatMe)
        this.search = ''
      }else{
        const newChatYou = {
          content: this.search,
          created_time: timeStamp,
          is_me: false,
          created_by: {
            id: 'Phạm Thị Hoa',
            avatar: 'https://images.unsplash.com/photo-1580908343124-72e0a786c588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1795&q=80',
          },
        }
        this.messageList.push(newChatYou)
        this.search = ''
      }
    }
    // getTime(timestamp) {
    //   return moment(timestamp * 1000).format('DD-MM-YYYY HH:mm')
    // },
  },

}
</script>
<style scoped>
.container {
  background: #FFFFFF;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.feeling-right{
  position: absolute;
  right: -107px;
  top:17px;
  opacity: 0;
}
.chat-item{
  margin-bottom: 10px;
}
.feeling-left{
  position: absolute;
  left: -100px;
  top:14px;
  opacity: 0;
}
.chat-you:hover .feeling-right{
  opacity: 1;
}
.chat-me:hover .feeling-left{
  opacity: 1;
}
.feeling-right svg{
  margin-right: 15px;
}
.feeling-left svg{
  margin-right: 15px;
}
.chat-me {
  background: rgb(55, 151, 240);
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-left: auto;
  width: max-content;
  gap: 5px;
  color: white;
  font-size: 15px;
  line-height: 20px;
  padding: 7px 12px;
  margin-bottom: 5px;
  position: relative;
}

.chat-you {
  display: flex;
  align-items: center;
  background: rgb(239, 239, 239);
  border-radius: 20px;
  width: max-content;
  color: #383737;
  gap: 5px;
  font-size: 15px;
  line-height: 20px;
  padding: 7px 12px;
  position: relative;
}
.chat{
  padding: 0 14px;
}
.wrapper-icon {
  position: absolute;
  top: 14px;
  right: 18px;
}

.wrapper-icon svg {
  margin-right: 15px;
}

.o-nhap {
  position: relative;
  margin-top: 5px;
  padding: 0 14px;
  /*position: fixed;*/
  /*bottom: 0;*/
  /*width: 100%;*/
}

.nhap-tin-nhan {
  width: 100%;
  padding: 15px 58px;
  border-radius: 40px;
  border: 1px solid rgb(219, 219, 219)
;
}

.icon {
  position: absolute;
  top: 14px;
  left: 23px;
}

.btn-profile {
  margin: 24px 32px;
  padding: 9px 15px;
  border-radius: 8px;
  color: black;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  border: 0;
  cursor: pointer;
}

.btn-profile:hover {
  background: rgb(219, 219, 219);
}

.user-friend {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
}

.bao-noi-dung {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid gainsboro;
}

.user-avt {
  width: 96px;
  height: 96px;
  border-radius: 999px;
  margin: 16px;
}

.body-messenger {
  display: flex;
  flex: 1;
  min-width: 1px;
}

.user-name {
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 4px;
}

.user-nickname {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgb(115, 115, 115);
}

.item-friends {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 24px;
  margin: 10px 0;
  cursor: pointer;
}
.item-friends:hover{
  background: rgb(239, 239, 239);
}
.new-message {
  cursor: pointer;
}

.name-friends {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: black;
  padding-bottom: 5px;
}

.content-friend {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(115, 115, 115);
}

.requests {
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: rgb(115, 115, 115);
  cursor: pointer;
}

.avt-friend {
  width: 56px;
  height: 56px;
  border-radius: 999px;
}

.avt {
  width: 44px;
  height: 44px;
  border-radius: 999px;
}

.name {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.title-messenger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 10px;
}

.noi-dung {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 1px;
}

.toolbar svg {
  margin-right: 13px;
  cursor: pointer;
}

.bao-contents {
  flex: 1;
  min-height: 1px;
  overflow: auto;
}

.name-me {
  font-size: 25px;
  font-weight: 700;
}

.home-messenger {
  width: 400px;
  height: 100%;
  border-right: 1px solid gainsboro;
}

.footer-conversation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 24px 12px;
}

.conversation {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.wrapper-friends {
  overflow: auto;
  height: 100%;
  flex: 1;
  min-height: 1px;
}
@media (max-width: 768px) {
  .name{
    display: none;
  }
  .title-messenger{
    display: none;
  }
  .bao-content{
    display: none;
  }
  .avt-friend{
    padding-bottom:0 ;
  }
  .home-messenger{
    width: 110px;
  }
  .footer-conversation{
    margin: 0 auto;
    padding: 36px 24px 0px;
  }
}
</style>