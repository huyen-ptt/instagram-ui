<template>
  <div>
    <div class="thong-tin">
      <img class="avt" src="@/assets/avt.png"/>
      <div>
        <div>
          <div class="name">
            <div class="my-name">huyn.huyn</div>
            <button class="update">Edit profile</button>
            <svg aria-label="Options" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24"
                 role="img" viewBox="0 0 24 24" width="24"><title>Options</title>
              <circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2"></circle>
              <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                  fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
          </div>
        </div>
        <div class="posts">
          <div><span>0</span> posts</div>
          <div><span>130</span> followers</div>
          <div><span>190</span> following</div>
        </div>
        <div class="first-name">
          <div>Thanh Huyen</div>
          <div>...</div>
        </div>
      </div>
    </div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" class="item">
          <svg aria-label="" class="_ab6-" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="12" role="img"
               viewBox="0 0 24 24" width="12">
            <rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" width="18" x="3" y="3"></rect>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  x1="9.015" x2="9.015" y1="3" y2="21"></line>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  x1="14.985" x2="14.985" y1="3" y2="21"></line>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  x1="21" x2="3" y1="9.015" y2="9.015"></line>
            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  x1="21" x2="3" y1="14.985" y2="14.985"></line>
          </svg>
          <router-link class="item-link" to="/personal">POSTS</router-link>
        </el-menu-item>
        <el-menu-item index="2" class="item">
          <svg aria-label="" class="_ab6-" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="12" role="img"
               viewBox="0 0 24 24" width="12">
            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                     stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
          </svg>
          <router-link class="item-link" to="/saved">SAVED</router-link>
        </el-menu-item>
        <el-menu-item index="3" class="item">
          <svg aria-label="" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="12" role="img"
               viewBox="0 0 24 24" width="12">
            <path
                d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"></path>
            <path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"></path>
            <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2"></circle>
          </svg>
          <router-link class="item-link" to="/tagget">TAGGET</router-link>
        </el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '2',
      activeIndex3: '3'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
.item{
  display: flex;
  align-items: center;
  gap:6px;
}
.my-name {
  font-weight: 400;
  font-size: 20px;
  color: black;
  line-height: 25px;
  cursor: pointer;
}

.first-name {
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
}

.item-link {
  text-decoration: none;
}

.el-menu-demo {
  display: flex;
  justify-content: center;
  line-height: 64px;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 80px;
}

.posts {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 30px;
  margin-bottom: 15px;
}

.posts span {
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
}

.update {
  padding: 10px 3px;
  width: 100px;
  background: rgb(239, 239, 239);
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  border: 0;
}

.update:hover {
  cursor: pointer;
  background: rgb(219, 219, 219);
}

.name {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.thong-tin {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-bottom: 30px;
  padding-right: 185px;
}

.avt {
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
}
</style>