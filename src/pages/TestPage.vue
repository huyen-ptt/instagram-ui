<template>
  <div>
    <button @click="isMenuVisible = !isMenuVisible">Menu</button>
    <ul v-show="isMenuVisible">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false
    }
  }
}
</script>