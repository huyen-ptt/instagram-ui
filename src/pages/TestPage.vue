<template>
  <div>
    <button @click="toggleMenu">Toggle menu</button>
    <ul
        v-bind:class="{
        'menu-open': isMenuOpen,
        'menu-close': !isMenuOpen
      }"
        class="menu"
        v-if="isMenuOpen"
    >
      <li>Menu item 1</li>
      <li>Menu item 2</li>
      <li>Menu item 3</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
.menu {
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease;
}
.menu-open {
  height: auto;
}
.menu-close {
  height: 0;
}
</style>