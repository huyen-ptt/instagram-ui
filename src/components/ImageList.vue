<template>
  <div id="con">
    <img class="img-small"
         :class="getActiveClass(index)"
         v-for="(src,index) in imageList"
         :key="index"
         :src="src"
         v-on:click="selectImage(src,index)">
  </div>
</template>

<script>
export default {
  props: {
    imageList: {
      type: Array,
      default() {
        return []
      }
    }
  },

  created() {
    console.log('created image')
  },

  mounted() {

  },

  data() {
    return {
      selectedImgIndex: 0
    }
  },

  methods: {
    getActiveClass(index) {
      if (this.selectedImgIndex === index) {
        return 'active'
      }
      return ''
    },

    selectImage(link, index) {
      this.selectedImgIndex = index;
      this.$emit('on-image-clicked', link, index)
    }
  }
}
</script>