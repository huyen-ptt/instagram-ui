<template>
  <div class="component">
    <p>Ten toi la {{ name }}</p>
    <p>Toi nam nay {{ age }} tuoi</p>
    <button v-on:click="ChangeName">thay tên</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-6">
        <app-user-defaul :hihiname="name"></app-user-defaul>
      </div>
      <div class="col-xs-12 col-sm-6 col-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
<!--  <template>-->
<!--    <div>-->
<!--      <div>{{loichao}}</div>-->
<!--      <ElCheckbox> check box</ElCheckbox>-->
<!--      <ul>-->
<!--        <li><router-link to="/" class="nav-link">trang chủ</router-link></li>&lt;!&ndash; router link tương ương với ther a&ndash;&gt;-->
<!--        <li><router-link to="/login" class="nav-link">Login</router-link></li>-->
<!--        <li><router-link to="/register">Register</router-link></li>-->
<!--      </ul>-->
<!--      <div>tôi tên là : {{name}}</div>-->
<!--    </div>-->
<!--  </template>-->
<!--  <script>-->
<!--    export default {-->
<!--      //vue router cho phép tạo các router , liên kết chúng đến thành phần vue và chuyển đổi trang m kh cần tải lại-->
<!--      created() {-->
<!--        const hihiId = this.$route.params.id; //trích vào id đường dẫn-->
<!--        console.log(`ID: ${hihiId}`); // khi thay đổi đường dẫn thì ở phần cosolog cx thay đổi theo-->
<!--      },-->
<!--      data(){-->
<!--        return{-->
<!--          loichao : 'Mời nhấn vào link để next trang'-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  </script>-->
</template>

<script>
import UserDefaul from './UserDefaul.vue';
import UserEdit from './UserEdit.vue';

export default {
  data() {  //dùng để truyền dữ liệu từ cha sang con , các component cha có tể truyền tb cho con bằng các sựu kiện
    return {
      name: 'Huyền',
      age: 19
    };
  },
  methods:{
    ChangeName(){
      this.name = 'ngọc'
    }
  },
  components: {
    appUserDefaul: UserDefaul,
    appUserEdit: UserEdit
  }
}
</script>