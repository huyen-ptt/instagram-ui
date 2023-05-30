<template>
  <div class="item-todo">
    <div class="name-todo">
      <ElCheckbox v-model="statusTodo"
                  @change="updateStatusTodo(todo)"/>
      <span :class="{ 'todo-finished': statusTodo }"
            @click="openDrawerTodo(todo)">{{ todo.name }}</span>
    </div>
    <div class="nut">
      <i @click="openConfirmModal(todo)"
         class="fa-regular fa-trash-can cursor"></i>
    </div>
  </div>
</template>
<script>
  import axios from "axios";

  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    },

    created() {
      this.statusTodo = this.todo.status;
    },

    data() {
      return {
        statusTodo: false
      }
    },

    methods: {
      updateStatusTodo(todo) {
        axios({
          url: `todos/${todo.id}`,
          method: 'put',
          data: {
            status: this.statusTodo
          }
        }).then((resp) => {
          this.$emit('on-status-changed', resp.data);
        }).catch((error) => {
          console.log('error', error)
        })
      },

      openConfirmModal() {
        this.$emit('on-open-comfirm-modal', this.todo)
      },

      openDrawerTodo() {
        this.$emit('on-open-drawer', this.todo)
      }
    }
  }
</script>

<style scoped>
.name-todo {
  display: flex;
  gap: 10px;
}

.nut {
  display: flex;
  gap: 10px;
  align-items: center;
}

.todo-finished {
  color: #808080;
  text-decoration-line: line-through;
}

.item-todo {
  padding: 16px;
  color: #F2F2F2;
  font-weight: 400;
  font-size: 14px;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #262626;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}
</style>