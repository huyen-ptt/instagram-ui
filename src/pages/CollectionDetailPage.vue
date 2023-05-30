<template>
  <div class="container">
    <div class="header">
      <img class="logo" src="../assets/todo.png"/>
      <div>{{ folderDetail.name }}</div>
    </div>
    <div class="o-nhap">
      <input type="text" v-model="search"
             class="search"
             @keyup.enter="enterInput"
             placeholder="Search">
      <button @click="createTodos" class="create-todo-btn">Add</button>
    </div>
    <div class="check-todos">
      <div class="created-todos check count-wrapper">
        <div class="count-item" @click="changeStatusQuery()"> Total: {{ countList.total }}</div>
        <div class="count-item" @click="changeStatusQuery(false)"> Pending: {{ countList.pending }}</div>
        <div class="count-item" @click="changeStatusQuery(true)"> Success: {{ countList.finished }}</div>
      </div>
      <div class="check">
        <div>Concluídas</div>
        <div class="quantity">
        </div>
      </div>
    </div>
    <div>
      <div style="width: 700px; margin:  0 auto ">
        <el-skeleton v-if="loading" :rows="6" animated />
      </div>
      <div v-if="todosList.length === 0 && !loading">
        Không có bản ghi nào
      </div>
      <div v-if="!loading"
           class="todo-list">
        <TodoItem v-for="item in todosList"
                  :key="item.id"
                  :todo="item"
                  @on-open-comfirm-modal="openConfirmModal"
                  @on-open-drawer="openDrawerTodo"
                  @on-status-changed="updateStatusTodo"></TodoItem>
      </div>
    </div>
    <el-dialog title="Tạo mới todo"
               :visible.sync="isOpenCreateModal">
      <div>
        <ElInput v-model="createname"
                 type="text"
                 placeholder="Nhâp name todo">
        </ElInput>
        <ElInput v-model="description"
                 type="textarea"
                 placeholder="nhập mô tả">
        </ElInput>
        <ElButton @click="addTodo"
                  :loading="loadingCreate"
                  :disabled="isDisableCreateBtn"
                  type="success">create</ElButton>
      </div>
    </el-dialog>
    <el-dialog title="sửa thư mục"
               :visible.sync="isOpenUpdateModal">
      <div>
        <ElInput v-model="changeName"
                 type="text"
                 placeholder="Nhâp name todo">
        </ElInput>
        <ElInput v-model="changeDescription"
                 type="textarea"
                 placeholder="nhập mô tả">
        </ElInput>
        <button @click="updateStatusTodo">update</button>
      </div>
    </el-dialog>
    <el-dialog :title="'xác thực'"
               width="350px"
               :visible.sync="isDeleteTodo">
      <div>{{ accuracyQuestion }}</div>
      <ElButton @click="closeConfimlModal"
                type="danger">Không
      </ElButton>
      <ElButton @click="deleteTodo(selectedTodo.id ,$event)"
                type="primary">Có
      </ElButton>
    </el-dialog>

    <el-drawer
        title="Tên của todo vừa được click"
        :visible.sync="isDrawerOpen" @closed="handleWhenDrawerClosed">
      <div class="content">
        <div v-if="selectedTodo"
             class="header-content">
          <div>
            <div>Tên</div>
            <input v-model="selectedTodo.name"
                   type="text"
                   placeholder="Nhập tên"/>
          </div>
          <div>Thời gian tạo : {{fomatTime}}</div>
          <div>
            <div>Mô tả</div>
            <input v-model="selectedTodo.description"
                   type="textarea"
                   placeholder="Nhập mô tả"/>
          </div>
        </div>
        <div class="footer-content">
          <div class="content-comment">
            <div>Nội dung comment</div>
            <el-skeleton v-if="loadingComment" :rows="6" animated />
            <div v-if="commentList.length === 0 && !loadingComment" > không có comment nào !</div>
            <div v-for="comment in commentList"
                 :key="comment.id"
                 class="customer-reviews" >
              <img class="avt"
                   src="../assets/avt.jpg"/>
              <div>
                <div class="name-created">{{ comment.created_by && comment.created_by.name }}</div>
                <div class="content-created">Nội dung:{{comment.content}}</div>
              </div>
            </div>
          </div>
          <input v-model="nameComment"
                  type="text"
                  placeholder="Comment"/>
          <button @click="createdCommentTodo()" title="Tooltp mặc định">Gửi</button>
        </div>
      </div>

    </el-drawer>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import TodoItem from "@/components/collections/TodoItem.vue";
export default {
  components: {
    TodoItem
  },

  data() {
    return {
      search: '',
      loading: false,
      todosList: [],
      error: false,
      isOpenCreateModal: false,
      isOpenUpdateModal: false,
      isDeleteTodo: false,
      createname: '',
      description: '',
      selectedTodo: null,
      changeName: '',
      changeDescription: '',
      folderDetail: {},
      countList: {} ,
      queryTodo:{},
      isDrawerOpen: false,
      nameTodo:'',
      descriptionTodo: '',
      createdTime : '' ,
      commentList : [] ,
      nameComment : '',
      fomatTime : '',
      contentComment:{},
      loadingComment: false,
      loadingCreate: false,
    }
  },
  created() {
    this.search = this.$route.query.search || ''
    this.getTodos();
    this.foderDetail();
    this.countTodo();
    this.getCommentTodo()
  },
  computed: {
    isDisableCreateBtn() {
      return this.createname === '' || this.description === '';
    },
    accuracyQuestion() {
      if (this.selectedTodo) {
        return ` bạn có muốn xóa todo ${this.selectedTodo.name}`
      }
      return ''
    },
    // formattedTime() {
    //
    // }
  },
  watch: {
    $route() {
      this.getTodos();
    },
  },
  methods: {
    handleWhenDrawerClosed() {
      this.commentList = [];
    },
    openDrawerTodo(todo) {
      this.isDrawerOpen = true;
      this.selectedTodo = todo;
      this.createdTime = todo.created_time;
      this.fomatTime = moment(this.createdTime, 'S').format('YYYY-MM-DD hh:mm')
      this.getCommentTodo();
    },
    getCommentTodo(){
      if (!this.selectedTodo) return;
      this.loadingComment = true;
      const id = this.selectedTodo.id;
      axios({
        url: `todos/${id}/comments`,
        method: 'get'
      }).then((resp)=>{
        console.log('commentTodo',resp);
        this.commentList = resp.data.data ;
        this.loadingComment = false;
      }).catch((error)=>{
        console.log('error',error);
        this.loadingComment = false;
      })
    },
    createdCommentTodo() {
      axios({
        url: 'comments',
        method: 'post',
        data:{
          content: this.nameComment,
          todo_id : this.selectedTodo.id
        }
      }).then((resp)=>{
        console.log('hihi',resp)
        this.commentList.push( resp.data)
        this.$message.success('comment thành công')
        this.nameComment = ''
      }).catch((error)=>{
        console.log('error',error)
      })
    },
    closeConfimlModal() {
      this.isDeleteTodo = false
    },
    update() {
      this.isOpenUpdateModal = true
    },

    changeStatusQuery(status = null) {
      const query = this.queryTodo;
      query.status = status;
      if (status === null) {
        delete query.status
      }
      this.queryTodo = query;
      this.getTodos()
    },
    createTodos() {
      this.isOpenCreateModal = true;
    },
    openConfirmModal(todo) {
      this.isDeleteTodo = true;
      this.selectedTodo = todo;
    },
    deleteTodo() {
      let checkStatus = this.selectedTodo.status;
      axios({
        url: `todos/${this.selectedTodo.id}`,
        method: 'delete',
      }).then(() => {
        this.isDeleteTodo = false;
        this.todosList = this.todosList.filter((todo) => {
          return todo.id !== this.selectedTodo.id;
        });
        this.$message.success('xóa todo thành công')
        this.countList.total = this.countList.total - 1
        console.log(checkStatus)
        if( checkStatus === true){
          this.countList.finished = this.countList.finished - 1
        }else{
          this.countList.pending = this.countList.pending - 1;
        }

      }).catch((error) => {
        console.log('error', error)
      })
    },
    foderDetail() {
      const id = this.$route.params.id
      axios({
        url: `collections/${id}`,
        method: 'get'
      }).then((resp) => {
        console.log('respdetail', resp)
        this.folderDetail = resp.data
      }).catch((error) => {
        console.log('error', error)
      })
    },
    updateStatusTodo(todo) {
      if (todo.status) {
        this.$message.success(` Hoàn thành todo ${todo.name} thành công`)
        this.countList.finished = this.countList.finished + 1
        this.countList.pending = this.countList.pending - 1
      } else {
        this.$message.success(` Xóa trạng thái ${todo.name} thành công`)
        this.countList.finished = this.countList.finished - 1
        this.countList.pending = this.countList.pending + 1
      }
    },
    addTodo() {
      const id = this.$route.params.id;
      this.loadingCreate = true;
      axios({
        url: 'todos',
        method: 'post',
        data: {
          name: this.createname,
          description: this.description,
          collection_id: `${id}`
        }
      }).then((resp) => {
        console.log('createTodos', resp)
        console.log('name', this.createname)
        console.log('name', this.description);
        this.loadingCreate = false;
        this.isOpenCreateModal = false
        this.$message.success('Tạo todo thành công')
        this.todosList.push(resp.data)
        this.countList.total = this.countList.total + 1
        this.countList.pending = this.countList.pending + 1
        this.createname = ''
        this.description = ''
      }).catch((error) => {
        this.loadingCreate = false;
        console.log('error', error)
      })
    },
    enterInput() {
      const query = {
        ...this.$route.query,
        search: this.search
      }
      if (!this.search) {
        delete query.search
      }
      this.$router.push({
        query: query
      })
    },
    countTodo() {
      const id = this.$route.params.id;
      axios({
        url: `collections/${id}/count`,
        method: 'get'
      }).then((resp) => {
        console.log('counttodo', resp)
        this.countList = resp.data
      }).catch((error) => {
        console.log('error', error)
      })
    },

    getTodos() {
      this.loading = true;
      const Id = this.$route.params.id;
      axios({
        url: `collections/${Id}/todos`,
        method: 'get',
        params: {
          search: this.search,
          ...this.queryTodo
        }
      }).then((resp) => {
        console.log('resp', resp)
        this.todosList = resp.data.data;
        this.loading = false
      })
    }
  },

}
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
.avt{
  width: 20px;
  height: 20px;
  border-radius: 999px;
}
.customer-reviews{
  display: flex;
  align-items: center;
  gap:10px;
}
.header-content{
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  color: black;
  margin-bottom: 20px;
}
.content-comment{
  width: 100%;
  height: 400px;
}

.count-wrapper {
  display: flex;
  align-items: center;
}

.count-item {
  padding: 4px 8px;
  background: #ab1fbb;
  border-radius: 999px;
  cursor: pointer;
}
.footer-content{
  color: black;
}
/*.content{*/
/*  dis*/
/*}*/
.container {
  background: #454545;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.logo {
  width: 21px;
  height: 36px;
}

.header {
  display: flex;
  align-items: center;
  gap: 11px;
  justify-content: center;
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  color: #4EA8DE;
  padding-top: 72px;
}

.o-nhap {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 53px;
}

.todo-list {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 700px;
  gap: 10px;

}

.search {
  font-weight: 400;
  font-size: 16px;
  padding: 16px 430px 16px 16px;
  color: #808080;
  background: #262626;
  border: 1px solid #0D0D0D;
  border-radius: 8px;
}

.create-todo-btn {
  background: #1E6F9F;
  border-radius: 8px;
  padding: 16px;
  border: 0;
}

.create-todo-btn:hover {
  cursor: pointer;
  background: #b3122a;
}

.check {
  display: flex;
  align-items: center;
  gap: 10px;
}

.check-todos {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 30px;
}
</style>

