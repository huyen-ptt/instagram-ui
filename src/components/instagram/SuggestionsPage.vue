<template>
  <div class="personal-information">
    <div class="header-personal-information">
      <div class="personal-page">
        <router-link to="/personal" class="avt-and-name">
          <img class="avt-me" src="@/assets/avt.png"/>
          <div>
            <div class="nickname">huyn.huyn</div>
            <div class="name-me">Thanh Huyen</div>
          </div>
        </router-link>
        <div class="switch">Switch</div>
      </div>
      <div class="suggestions">
        <div class="recommend-friends">Suggestions for you</div>
        <div class="all-suggest">See All</div>
      </div>
      <div class="wrapper-suggestion-section">
        <div class="item-suggestion-section">
          <div class="friend-suggestion">
            <img class="avt-personal-post" src="@/assets/avt (4).png"/>
            <div>
              <div class="name-friend-suggestion">huy.diuz</div>
              <div class="friend-followed">Followed by mih2uan_ + 2 more</div>
            </div>
          </div>
          <div class="follow">Follow</div>
        </div>
        <div class="item-suggestion-section">
          <div class="friend-suggestion">
            <img class="avt-personal-post" src="@/assets/avt (3).png"/>
            <div>
              <div class="name-friend-suggestion">Jonh</div>
              <div class="friend-followed">Followed by mih2uan_ + 2 more</div>
            </div>
          </div>
          <div class="follow">Follow</div>
        </div>
        <div class="item-suggestion-section">
          <div class="friend-suggestion">
            <img class="avt-personal-post" src="@/assets/avt (2).png"/>
            <div>
              <div class="name-friend-suggestion">Math.ha</div>
              <div class="friend-followed">Followed by mih2uan_ + 2 more</div>
            </div>
          </div>
          <div class="follow">Follow</div>
        </div>
        <div class="item-suggestion-section">
          <div class="friend-suggestion">
            <img class="avt-personal-post" src="@/assets/avt-friend (2).png"/>
            <div>
              <div class="name-friend-suggestion">bick.pt</div>
              <div class="friend-followed">Followed by mih2uan_ + 2 more</div>
            </div>
          </div>
          <div class="follow">Follow</div>
        </div>
        <div class="item-suggestion-section">
          <div class="friend-suggestion">
            <img class="avt-personal-post" src="@/assets/avt-friend (3).png"/>
            <div>
              <div class="name-friend-suggestion">van.dz</div>
              <div class="friend-followed">Followed by mih2uan_ + 2 more</div>
            </div>
          </div>
          <div class="follow">Follow</div>
        </div>
      </div>
    </div>
    <div class="footer-personal-information">
      <div class="source">About-Help-Press-API-Jobs-Privacy-Terms-Locations-Language-Meta Verified</div>
      <div class="source">© 2023 ISTAGRAM FROM META</div>
    </div>
  </div>
</template>
<style scoped>
.header-personal-information {
  margin-bottom: 20px;
}
.nickname {
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 0, 0);
  font-weight: 600;
}
.switch {
  font-size: 12px;
  line-height: 18px;
  color: rgb(0, 149, 246);
  font-weight: 600;
}
.all-suggest:hover {
  cursor: pointer;
  opacity: .5;
}
.item-suggestion-section:hover {
  cursor: pointer;
}
.item-suggestion-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.avt-personal-post:hover {
  cursor: pointer;
}
.avt-personal-post {
  width: 42px;
  height: 42px;
}
.name-friend-suggestion {
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 0, 0);
  font-weight: 600;
}
.friend-followed {
  font-size: 12px;
  line-height: 16px;
  color: rgb(115, 115, 115);
  font-weight: 400;
}
.follow {
  font-size: 12px;
  line-height: 16px;
  color: rgb(0, 149, 246);
  font-weight: 600;
}

.follow:hover {
  opacity: 0.4;
}
.source {
  font-size: 12px;
  line-height: 16px;
  color: rgb(199, 199, 199);
  font-weight: 400;
  margin-bottom: 10px;
}

.source:hover {
  cursor: pointer;
}
.friend-suggestion {
  display: flex;
  align-items: center;
  gap: 10px;
}
.avt-personal-post:hover {
  cursor: pointer;
}
.all-suggest {
  font-size: 12px;
  line-height: 16px;
  color: rgb(0, 0, 0);
  font-weight: 600;
}
.recommend-friends {
  font-size: 14px;
  line-height: 18px;
  color: rgb(114, 114, 114);
  font-weight: 600;
}
.suggestions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.name-me {
  font-size: 14px;
  line-height: 18px;
  color: rgb(0, 0, 0);
  font-weight: 400;
}
.personal-page:hover {
  cursor: pointer;
}
.avt-me {
  width: 56px;
  height: 56px;
  border-radius: 999px;
}

.avt-and-name {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
}
.personal-page {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
@media (max-width: 768px) {
  .personal-information{
    display: none;
  }
}
</style>