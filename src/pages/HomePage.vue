<template>
  <div class="container">
    <div class="header">
      <div class="new-file">
        <i class="fa-solid fa-file"></i>
        <div>All File</div>
      </div>
      <div class="search-file">
        <input v-model="search"
               class="search"
               @keyup.enter="enterInput"
               type="text" placeholder="Search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <button class="create-file" @click="openCreateModal">Create new folder</button>
    </div>
    <ElAlert v-if="folderList.length === 0 && loading === false"
             type="success" > Không có dữ liệu </ElAlert>
    <div class="wrapper-file">
      <router-link v-for="(item) in folderList"
                   :key="item.id"
                   :to="`collection/${item.id}`"
           class="item-file">
        <div class="icon-file">
          <i class="fa-solid fa-folder" :style="{ color: item.color }"></i>
          <button @click="openUpdateModal(item)">cập nhật</button>
          <i @click="openConfirmModal(item)" class="fa-solid fa-xmark"></i>
        </div>
        <div class="title-file">
          {{ item.name }}
        </div>
      </router-link>
    </div>
    <div>{{ LoadingBtn }}</div>
    <div v-if="error" class="error">Có lỗi xảy ra !</div>
    <el-dialog title="Tạo mới thư mục"
               :visible.sync="isOpenCreateModal">
      <div v-if="loading">Loading</div>
      <div>
        <input v-model="searchname"
               type="text"
               placeholder="Nhâp name">
        <select v-model="color">
          <option value="red">#FC2947</option>
          <option value="blue">#3E54AC</option>
          <option value="green">#5D9C59</option>
          <option value="yellow">#FEFF86</option>
        </select>
        <button @click="CreateFolder">Add</button>
      </div>
    </el-dialog>
    <el-dialog title="Cập nhật thư mục"
               :visible.sync="isOpenUpdateModal">
      <div>
        <div v-if="loading">Loading</div>
        <div>
          <input v-model="updatedName"
                 type="text"
                 placeholder="Nhâp name">
          <select v-model="updatedColor">
            <option value="red">#FC2947</option>
            <option value="blue">#3E54AC</option>
            <option value="green">#5D9C59</option>
            <option value="yellow">#FEFF86</option>
          </select>
          <button @click="updateFolder">{{loadingUpdateBtn}}</button>
        </div>
      </div>
    </el-dialog>
    <el-dialog :title="conFirmDeleteTitle"
               width="350px"
               :visible.sync="isOpenConfirmModal">
      <ElButton type="danger" @click="closeConfirmModal">Không</ElButton>
      <ElButton type="primary" @click="deleteFolder(selectedFolder.id)">Có</ElButton>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      folderList: [],
      title: '',
      loading: false,
      error: false,
      search: '',
      searchname: '',
      color: 'red',
      isOpenCreateModal: false,
      isOpenUpdateModal: false,
      isOpenConfirmModal : false,
      updatedName: '',
      updatedColor: '',
      selectedFolder: null
    }

  },
  created() {
    this.search = this.$route.query.search || ''
    this.getFile();
  },

  computed: {
    loadingUpdateBtn(){
      if (this.loading === true) {
        return 'Loading....'
      }
      return 'update'
    },
    LoadingBtn() {
      if (this.loading === true) {
        return 'Loading....'
      }
      return ''
    },
    conFirmDeleteTitle(){
      if(this.selectedFolder){
        return `Bạn có muốn xóa folder "${this.selectedFolder.name}" khong ?`
      } return ''
    },
  },
  watch: {
    $route() {
      this.getFile();
    },
  },

  methods: {
    openUpdateModal(folder){
      console.log(folder);
      this.selectedFolder = folder;
      this.updatedName = folder.name;
      this.updatedColor = folder.color;
      this.isOpenUpdateModal = true;
      // axios({
      //   url: ''
      // })
    },

    closeConfirmModal() {
      this.isOpenConfirmModal = false;
    },

    updateFolder() {
      this.loading = true;
      axios({
        method: 'put',
        url: `collections/${this.selectedFolder.id}`,
        data: {
          "name": this.updatedName,
          "color": this.updatedColor
        }
      }).then((resp)=>{
        console.log('resp update: ', resp);
        this.loading = false;
        this.isOpenUpdateModal = false;
        this.$message.success('update folder thành công');
        this.folderList = this.folderList.map(folder => {
          if (this.selectedFolder.id === folder.id) {
            return {
              ...resp.data,
              color: this.updatedColor
            }
          }
          return folder
          // return this.selectedFolder.id === folder.id ? resp.data : folder
        })
      }).catch(() => {
        this.loading = false;
      })
    },

    openCreateModal() {
      this.isOpenCreateModal = true;
    },
    openConfirmModal(folder){
      this.selectedFolder = folder;
      this.isOpenConfirmModal = true;
    },
    deleteFolder(id) {
      this.closeConfirmModal()
      axios({
        url: `collections/${id}`,
        method: 'delete'
      }).then(() => {
        this.folderList = this.folderList.filter((item) => {
          return item.id !== id;
        })
        this.$message.success('xóa folder thành công')
      })

    },
    CreateFolder() {
      // this.loading = true
      axios({
        url: 'collections',
        method: 'post',
        data: {
          "name": this.searchname,
          "color": this.color
        }
      }).then((resp) => {
        console.log('resp1', resp)
        console.log('color', this.color)
        console.log('name', this.searchname)
        this.isOpenCreateModal = false;
        this.$message.success('tạo thành công !')
        this.folderList.push({
          ...resp.data,
          color: this.color
        })
        this.searchname = ''
      }).catch((error) => {
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

    getFile() {
      this.loading = true;
      axios({
        url: 'collections',
        params: {search: this.search}
      }).then(resp => {
        console.log('resp: ', resp);
        this.folderList = resp.data.data
        this.loading = false;
      }).catch((error) => {
        console.log('error', error)
        this.error = true
        this.loading = false;
        this.$message.error('có lỗi xảy ra !')
      })

    }
  }
}
</script>

<style scoped>
.container {
  background: lightgoldenrodyellow;
  width: 100%;
  height: 100vh;
  padding: 30px;
}

.title-file {
  color: #42b983;
  margin-top: 20px;
}

.error {
  color: red;
}

.wrapper-file {
  display: flex;
  align-items: center;
  gap: 10px;
  /*justify-content: space-around;*/
  margin-top: 100px;
}

.header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  border-bottom: 1px solid black;
}

.new-file {
  display: flex;
  align-items: center;
  gap: 10px;
  color: lightskyblue;
  font-size: 25px;
  font-weight: 500;
}

.fa-solid {
  font-size: 27px;
}

.search-file {
  position: relative;
}

.search {
  padding: 15px 200px 15px 40px;
  border: 0;
  border-radius: 20px;
}

.fa-magnifying-glass {
  position: absolute;
  top: 13px;
  left: 10px;
  font-size: 20px;
}

.create-file {
  background: aquamarine;
  padding: 15px;
  border-radius: 10px;
  border: 0;
}

.create-file:hover {
  cursor: pointer;
  background: #FFC600;
}

.item-file {
  padding: 25px;
  background: #E5E5E5;
  border-radius: 10px;
  margin-top: 40px;
  width: 200px;
}

.icon-file {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fa-folder, .fa-xmark {
  font-size: 24px;
}

</style>