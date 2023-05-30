<template>
  <div class="container">
    <!--      <div>-->
    <!--        <img id="img-big" :src="bigImg"/>-->
    <!--      </div>-->

    <!--      <ImageList :image-list="arr" @on-image-clicked="selectImageChinh"></ImageList>-->
    <!--      <div style="height: 50px"></div>-->
    <!--      <ImageList :image-list="arr2" @on-image-clicked="selectImageChinh"></ImageList>-->
    <!--      <ul>-->
    <!--        <TodoItem name="huyền"-->
    <!--                  :age="huyenAge"-->
    <!--                  @on-change-age="hanleChangeAge"></TodoItem>-->
    <!--        <TodoItem name="Chính" :age="chinhAge" @on-change-age="hanleChangeAge"></TodoItem>-->
    <!--      </ul>-->
    <ChangeColor color='red' text="success alert" @Remove="HienThi"></ChangeColor>
    <ChangeColor color='blue' text="info alert" @Remove="HienThi"></ChangeColor>
    <ChangeColor color='yellow' text="warning alert " @Remove="HienThi"></ChangeColor>
    <ChangeColor color='green' text="error alert" @Remove="HienThi"></ChangeColor>

    <SideBar :menuList="menuList" ></SideBar>

    <LoginForm></LoginForm>
    <CreateStudent :StudentList="StudentList" @on-delete="DeleteStudent" @on-create-student="createStudent"></CreateStudent>
  </div>
</template>

<script>
import axios from "axios";
// import TodoItem from "@/components/TodoItem.vue";
// import ImageList from "@/components/ImageList.vue";
import ChangeColor from "@/components/ChangeColor.vue";
import SideBar from "@/components/SideBar.vue";
import LoginForm from "@/components/LoginForm.vue";
import CreateStudent from "@/components/CreateStudents.vue";
export default {
  name: 'App',
  components: {
    LoginForm,
    SideBar,
    ChangeColor,
    // TodoItem,
    // ImageList,
    CreateStudent,


  },
  created() {
    this.bigImg = this.arr[0]
    this.createdLi()

  },

  data() {
    return {
      arr: [
        "https://images.unsplash.com/photo-1678815927938-0fb01822962c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1678815927938-0fb01822962c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1678729465114-a9a2b955d4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1678814738558-6940c8bd7329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1678794105178-be9db45ac247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1678811118426-7a445633d350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      ],
      huyenAge: 18,
      bigImg: "",
      selectedImgIndex: 0,
      StudentIndex: 0,
      thanhCong: [],
      postList: [],
      menuList: [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' },
        { text: 'Setting', url: '/setting' },
        { text1: 'Setting', url: '/setting' },
      ],
      StudentList:[
        { name:'Phạm Thị Thanh Huyền', class:'C2209G' , gerder:'female'},
        { name:'Phạm Thị Bích Ngọc', class:'C2229B' , gerder:'female'},
        { name:'Phạm Mạnh Cường ', class:'C0209N' , gerder:'male'},
        { name:'Phạm Đức Chính', class:'C2309H' , gerder:'male'},
      ],
    }
  },

  computed: {
    chinhAge() {
      return 23
    }
  },


  methods: {
    createdLi() {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(resp => {
            this.postList = resp.data;
          })
    },

    createStudent(hocsinh) {
      this.StudentList.unshift(hocsinh)
    },


    DeleteStudent(index){
      this.StudentIndex = index
      console.log('index',index)
      this.StudentList.splice(index,1)
    },


    hanleChangeAge(newAge) {
      this.huyenAge = newAge;
      console.log('value: ', newAge);
    },

    selectImageChinh(link, index) {
      this.bigImg = link
      this.selectedImgIndex = index

    },

    HienThi(){
      console.log('hello')
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#con {
  display: flex;
  gap: 10px;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  padding: 5px;
  border: 2px solid rgb(232, 219, 219);
}

#img-big {
  width: 400px;
  height: 300px;
}

.img-small:hover {
  cursor: pointer;
  border: 2px solid rgb(188, 40, 40);
}

.active {
  border: 2px solid rgb(188, 40, 40);
}
</style>
<!-- //npm là công cụ để tạo và quản lí các thư viện lập trình js cho nodejs
//giúp các dự án mưới tránh phải việc viết lại các tp, và thư viện cơ bản
//thành phần trong npm:website, cli-giúp tưng tác vs npm , registry là kho lưu trữ phàn mềm

//NodeJS là mã nguồn mở chạy trên môi trường V8 JavaScript runtime
 //(một trình thông dịch JavaScript chạy cực nhanh trên trình duyệt Chrome).
// NodeJS giúp các nhà phát triển xây dựng các ứng dụng web một cách đơn giản và dễ dàng mở rộng. -->