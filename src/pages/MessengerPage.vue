<template>
  <div class="container">
    <div class="header">
      <div class="toolbar">
        <div class="toolbar-left">
          <i class="fa-solid fa-arrow-left"></i>
          <div>Chat</div>
        </div>
        <img class="edit-node toolbar-right" src="../assets/edit 3.png"/>
      </div>
      <div class="enter-search-text">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input v-model="friendName"
               class="search"
               type="text" placeholder="Search here..."
               @keyup.enter="searchFriends">
        <i class="fa-solid fa-microphone"></i>
      </div>
    </div>
    <div class="wrapper-content">
      <div class="search-bar">
        <div class="add-friend">
          <img class="add" src="../assets/cong.png"/>
        </div>
        <div class="item-avt-friend">
          <img src="../assets/avt.png"/>
        </div>
        <div class="item-avt-friend">
          <img src="../assets/avt (2).png"/>
        </div>
        <div class="item-avt-friend">
          <img src="../assets/avt (3).png"/>
        </div>
        <div class="item-avt-friend">
          <img src="../assets/avt.png"/>
        </div>
        <div class="item-avt-friend">
          <img src="../assets/avt (2).png"/>
        </div>
        <div class="item-avt-friend">
          <img src="../assets/avt (4).png"/>
        </div>
        <div class="item-avt-friend">
          <img src="../assets/avt (3).png"/>
        </div>
      </div>
      <div class="wrapper-message-content">
        <div v-for="item in chatList"
             :key="item.id"
             class="item-message-content"
             @click="handleClickMessage(item)">
          <img :src="item.message_to.avatar" class="avt-friend">
          <div class="bao-noi-dung">
            <div class="account">
              <div class="name-friend">{{item.message_to.name}}</div>
              <div class="date">{{getTime(item.created_time)}}</div>
            </div>
            <div class="content">{{item.last_message}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <img class="icon-footer" src="../assets/one.png"/>
      <img  class="icon-footer" src="../assets/two.png"/>
      <img class="icon-footer" src="../assets/cammera.png"/>
      <img class="icon-footer" src="../assets/setting.png"/>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
  import moment from "moment/moment";

  export default {
    created() {
      const chatList = localStorage.getItem('chatList');
      this.chatList = JSON.parse(chatList);
      this.chatListClone = [...this.chatList];
    },

    data() {
      return {
        time:'',
        friendName: '',
        chatList: [],
        chatListClone: []
      }
    },

    methods:{
      getTime(time){
        return this.time = moment(time, 'S').format('YYYY-MM-DD hh:mm')
      },

      searchFriends() {
        this.chatList = this.chatListClone.filter(o => {
          return o.message_to.name.toLowerCase().includes(this.friendName)
        })
      },

      handleClickMessage(item) {
        this.$router.push({
          name: 'ChatMessenger',
          params: { id: item.id }
        });
        localStorage.setItem('chatPeopleInfo', JSON.stringify(item));
      }
    },

  }
</script>
<style scoped lang="scss">
  .bao-noi-dung {
    flex: 1;
    min-width: 1px;
  }
  .item-message-content {
    transition: .4s;
    padding: 18px;
    cursor: pointer;
    border-radius: 10px;
    background: #FFFFFF;
    &:hover {
      box-shadow: 7px 12px 50px rgba(0, 0, 0, 0.16);
    }
  }
  .name-friend{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
  }
  .content{
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #9C9797;
  }
  .end{
    margin-bottom: 24px;
  }
  .footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 50px;
  }
  .icon-footer{
    width: 26px;
    height: 20px;
    object-fit: contain;
  }
  .date{
    color: #C5BDBD;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
  .container{
    max-width: 768px;
    height: 100vh;
    background: #FFFFFF;
    border-radius: 34px;
    margin: 0 auto;
    padding: 5px 25px 25px 25px;
    overflow-y: auto;
  }
  .wrapper-content {
    min-height: 1px;
    overflow: auto;
  }
  .enter-search-text{
    position: relative;
  }
  .fa-microphone{
    position: absolute;
    font-size: 25px;
    right:32px;
    top:25px;
  }

  .fa-magnifying-glass{
    position: absolute;
    font-size: 25px;
    left:32px;
    top:25px;
  }
  .toolbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
  }
  .item-message-content{
    display: flex;
    align-items: center;
    gap:23px;
    margin-bottom: 5px;
  }
  .toolbar-left{
    display: flex;
    gap:18px;
    align-items: center;
    color: #000000;
    font-weight: 500;
    font-size: 26px;
    line-height: 39px;
  }
  .search-bar{
    display: flex;
    align-items: center;
    gap: 37px;
    width: 100%;
    margin-bottom: 44px;
  }
  .avt-friend{
    width: 50px;
    height: 50px;
    border-radius: 999px;
  }
  .account{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .search{
    background: #FFFDFD;
    border: 1px solid #E5E5E5;
    border-radius: 62px;
    width: 100%;
    padding: 27px 77px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: black;
  }
  .header{
    margin-bottom: 30px;
  }
  .edit-node{
    width: 24px;
    height: 24px;
  }
  .add-friend{
    width: 50px;
    height: 50px;
    border-radius: 999px;
    background: rgba(242, 242, 242, 0.7);
    border: 1px dashed rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-avt-friend{
    width: 58px;
    height: 58px;
    border-radius: 999px;
    padding: 3px;
    border: 3px solid #55A99D;
  }
  .add{
    width: 14px;
    height: 14px;
  }

</style>