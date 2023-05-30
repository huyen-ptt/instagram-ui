<template>
  <div>
    Tên tôi là: {{ name }} năm nay tôi {{ age }} tuôi
    <button @click="changeAge"> Thêm cho tôi một tuổi </button>
  </div>
</template>

<script>
export default {
  // props:['name','age'], // props cơ bản

  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: [String, Number],
      default() {
        return ''
      }
    }
  },

  data() {
    return {
    }
  },

  methods: {
    changeAge() {
      this.$emit('on-change-age', 30)
    }
  }
}
</script>