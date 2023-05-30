<template>
  <div>
    <div class="student"
         v-for="(item,index) in StudentList"
         :key="index">
      <div >{{item.name}}</div>
      <div>{{item.class}}</div>
      <div>{{item.gerder}}</div>
      <div @click="RemoveStudent(index)">X</div>
    </div>
    <input type="text" v-model="name">
    <select v-model="classStudent">
      <option value="H1023D">H1023D</option>
      <option value="G1145F">G1145F</option>
      <option value="C2209G">C2209G</option>
      <option value="S2210G">S2210G</option>
    </select>
    <div>gerder: {{ gerder }}</div>
    <input v-model="gerder" type="radio" value="male" >
    <label>Male</label>
    <input  v-model="gerder" type="radio" value="female">
    <label>Female</label>
    <button @click="addStudent">Thêm</button>
  </div>
</template>
<script>
export default {
  props:{
    StudentList:{
      type: Array,
      require:true
    },

  },
  data() {
    return {
      StudentIndex: 0,
      name:'',
      classStudent:'H1023D',
      gerder:'male',

    }
  },
  methods:{
    RemoveStudent(index){
      this.StudentIndex = index
      this.$emit('on-delete', index)

    },
    addStudent(){
      const student = {
        name: this.name,
        class: this.classStudent,
        gerder: this.gerder
      }
      this.$emit('on-create-student', student);
      this.gerder = 'male';
      this.classStudent = 'H1023D';
      this.name = ''
    }

  }
}
</script>
<style scoped>
  .student{
    display: flex;
    gap:40px;
    align-items: center;
  }
</style>