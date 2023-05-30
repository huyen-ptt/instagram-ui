<template>
  <div class="container">
    <div class="header-chat">
      <div class="chat-person">
        <div class="avt-header">
          <router-link to="/messenger">
            <i class="fa-solid fa-arrow-left"></i>
          </router-link>
          <img :src="chatRoomInfo.message_to.avatar"
               class="avt" />
        </div>
        <div>
          <div class="name-friend">{{chatRoomInfo.message_to.name}}</div>
          <div class="playing" v-if="chatRoomInfo.is_online">
            <div class="working">Active Now</div>
            <div class="cham-xanh"></div>
          </div>
        </div>
      </div>
      <div class="call">
        <img class="phone" src="../assets/phone.png"/>
        <img class="call-video" src="../assets/call-video.png"/>
      </div>
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
          <div :class="getClass(content.is_me)"
               @click="showTime(content)">
            <div v-if="!content.is_me">
              {{content.content}}
            </div>
            <div v-else>
              <div class="content-chat"> {{content.content}}</div>
            </div>
          </div>
        </div>
        <div v-if="content.is_show_time">
          <div v-if="content.is_me"
               class="content-time text-right">
            {{ getTime(content.created_time) }}
          </div>
          <div v-else
               class="content-time ">
            {{ getTime(content.created_time) }}
          </div>
        </div>
      </div>
<!--      <div class="date-chat">Thursday 24, 2022</div>-->
    </div>
    <div class="footer">
      <div class="search">
        <input  v-model="search"
                @keyup.enter="enterSearch"
                class="enter-messenger"
                type="text"
                placeholder="Send Message">
        <img class="plane" src="../assets/may-bay.png"/>
      </div>
      <div class="micc">
        <i class="fa-solid fa-microphone"></i>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  created() {
    // const arr1 = [1,2,3];
    // const arr2 = JSON.parse(JSON.stringify(arr1));
    // const obj1 = {
    //   key: 'value'
    // };
    // const obj2 = { ...obj1 };
    // arr2[1] = 5;
    // obj2.key1 = 'chính';
    // delete obj2.key;
    // console.log('arr1: ', obj2);
    // console.log('arr2: ', obj1);
    const chatInfo = localStorage.getItem('chatPeopleInfo');
    this.chatRoomInfo = JSON.parse(chatInfo);
    this.messageList = this.messageList.map(item => {
      return {
        ...item,
        is_show_time: false
      }
    })
  },

  data() {
    return {
      search:'',
      isActive:'',
      chatRoomInfo: {},
      messageList: [
        {
          id: 1,
          content: 'Ăn cơm chưa',
          created_time: 1680872373,
          created_by: {
            id: 'Phạm Đức Chính',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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
            id: 'Phạm Đức Chính',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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
            id: 'Phạm Đức Chính',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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
    getClass(is_me){
      if(is_me){
        return 'chat-me'
      }
      return 'chat-you'
    },

    showTime(item) {
      // this.$set(item, 'is_show_time', true);
      item.is_show_time = true;
    },

    getTime(timestamp) {
      return moment(timestamp * 1000).format('DD-MM-YYYY HH:mm')
    },
    enterSearch(){
      const timeStamp = new Date().getTime() / 1000;
      const newChat = {
        content: this.search,
        created_time: timeStamp,
        is_me: true,
        is_show_time: false
      }
      this.messageList.push(newChat)
      this.search = ''
    }

  }
}
</script>
<style scoped>
.me{
  background: #FFFFFF;
}
.chat-item {
  margin-bottom: 30px;
}
.content-time {
  padding-top: 5px;
}
.text-right {
  text-align: right;
}
.container{
  background: #FFFFFF;
  border-radius: 34px;
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  overflow: auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.chat-chat{
  display: flex;
  gap:10px;
  align-items: center;
}
.avt-header{
  display: flex;
  align-items: center;
  gap:10px;
}
.chat-me{
  background: rgba(228, 228, 228, 0.83);
  border-radius: 20px 20px 0px 20px;
  display: flex;
  align-items: center;
  margin-left: auto;
  /*max-width: 90%;*/
  width: max-content;
  gap:5px;
  color: #007665;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 11px 8px 20px;
}
.search{
  position: relative;
}
.fa-microphone{
  font-size: 19px;
  color: #FFFFFF;
}
.micc{
  width: 50px;
  height: 50px;
  background: linear-gradient(180deg, #55A99D 0%, #007665 100%);
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.voice-me{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5px;
}
.avt-me{
  position: relative;
}
.plane{
  width: 18px;
  height: 18px;
  position: absolute;
  right: 24px;
  top: 15px;
}
.voice{
  width: 158px;
  height: 42px;
  padding: 6px 9px 7px 24px;
  object-fit: contain;
}
.play{
  width: 7px;
  height: 7px;
}
.thanh{
  width: 200px;
  height: 30px;
}
.circle-play{
  width: 42px;
  height: 42px;
  background: #FFFFFF;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle-stop{
  width: 42px;
  height: 42px;
  background: #FFFFFF;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stopp{
  width: 7px;
  height: 7px;
}
.thanh-voice{
  width: 150px;
  height: 20px;
}
.enter-messenger{
  padding: 13px 400px 13px 22px;
  background: #F7F7F7;
  border-radius: 28px;
  position: relative;
  border: 0;
}
.voice-chat{
  background: #D0ECE8;
  border-radius: 27.5px 27.5px 0px 27.5px;
}
/*.content-chat{*/
/*  font-weight: 400;*/
/*  font-size: 16px;*/
/*  line-height: 24px;*/
/*  padding: 8px 11px 8px 20px;*/
/*}*/
.doi{
  margin-bottom: 10px;
}
.playing{
  display: flex;
  gap:4px;
  align-items: center;
}
.chat-person{
  display: flex;
  align-items: center;
  gap:16px;
}
.avt{
  width: 50px;
  height: 50px;
  border-radius: 999px;
}
.name-friend{
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
}
.working{
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  color: #DEDEDE;
}
.noi-dung{
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #383737;
  padding: 11px 8px;
  background: rgba(228, 228, 228, 0.83);
  border-radius: 20px 20px 20px 0px;
}
.date-chat{
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #DEDEDE;
  margin-bottom: 30px;
}
.chat-you{
  display: flex;
  align-items: center;
  background: rgba(228, 228, 228, 0.83);
  border-radius: 20px 20px 20px 0;
  width: max-content;
  color: #383737;
  gap:5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 11px 8px 20px;
}
.is-active{
  background: #55A99D;
  border-radius: 999px;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 1px;
  right: 4px;
  border: 2px solid #FFFFFF;
}
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  padding: 20px;
  border-top: 1px solid rgba(228, 228, 228, 0.83);
}
.cham-xanh{
  background: #55A99D;
  width: 8px;
  height: 8px;
  border-radius: 999px;
}
.chat-mee{
  display: flex;
  margin-left: auto;
}
.header-chat{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(228, 228, 228, 0.83);
  padding: 20px;

}
.phone{
  width: 15px;
  height: 20px;
  object-fit: contain;
}
.call-video{
  width: 25px;
  height: 18px;
}
.call {
  display: flex;
  gap: 34px;
}
.chat{
  overflow: auto;
  padding: 10px;
}


</style>