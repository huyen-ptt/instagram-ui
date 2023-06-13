<template>
  <div class="container">
    <div class="header-personal">
      <div>
        <svg aria-label="Options" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
             role="img" viewBox="0 0 24 24" width="24"><title>Options</title>
          <circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2"></circle>
          <path
              d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
              fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
        </svg>
      </div>
      <div class="name">
        <div class="name-me">Huyn.huyn</div>
        <svg aria-label="Down chevron icon" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="12"
             role="img" viewBox="0 0 24 24" width="12">
          <path
              d="M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z"></path>
        </svg>
      </div>
      <svg aria-label="Discover People" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
           role="img" viewBox="0 0 48 48" width="24"><title>Discover People</title>
        <path
            d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path>
      </svg>
    </div>
    <div class="thong-tin">
      <div class="custom">
        <div>
          <img class="avt" src="@/assets/avt.png"/>
        </div>
        <div class="edit">
          <div class="user-name">Huyn.huyn</div>
          <button class="btn-custom">Edit profile</button>
          <button class="btn-custom">Ad tools</button>
        </div>
      </div>
      <div class="name-mee">
        <div>
          Thanh Huyền
        </div>
        <div>...</div>
      </div>
      <div class="posts">
        <div class="item-post"><span>0</span> posts</div>
        <div class="item-post"><span>130</span> followers</div>
        <div class="item-post"><span>190</span> following</div>
      </div>
      <PersonLink/>
      <div class="photos">
        <i class="fa-thin fa-circle-camera"></i>
        <div class="item-one">Share Photos</div>
        <div class="item-two">When you share photos, they will appear on your profile.</div>
        <div class="item-three">Share your first photo</div>
      </div>
    </div>
    <menuInstagramDt/>
  </div>
</template>
<script>
import menuInstagramDt from "@/components/instagram/MenuInstagramDt.vue";
import PersonLink from "@/components/instagram/PersonLink.vue";

export default {
  components: {
    menuInstagramDt,
    PersonLink
  }
}
</script>
<style scoped>
.photos {
  margin: 60px 44px;
}

.item-one {
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 18px;
  text-align: center;
}

.item-two {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 18px;
  text-align: center;
}

.item-three {
  color: rgb(0, 149, 246);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
}

.thong-tin {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 1px;
  overflow: auto;
}

.item-three:hover {
  cursor: pointer;
  color: rgb(0, 55, 107);
}

.posts {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px;
  border-bottom: 1px solid gainsboro;
}

.item-post {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: rgb(115, 115, 115);
}

.posts span {
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: black;
}

.container {
  background: #FFFFFF;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.btn-custom {
  background: rgb(239, 239, 239);
  border-radius: 8px;
  padding: 0 70px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
}

.header-personal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;
  border-bottom: 1px solid gainsboro;
}

.user-name {
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}

.edit {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.name-mee {
  padding: 0 16px 21px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  border-bottom: 1px solid gainsboro;
}

.custom {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 16px 16px 24px;
}

.name {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.avt {
  width: 77px;
  height: 77px;
  border-radius: 999px;
}

.name-me {
  font-size: 17px;
  font-weight: 500;
}
</style>