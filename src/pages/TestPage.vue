<template>
  <nav>
    <ul>
      <li :class="{ 'active': activeMenu === 'home' }"><router-link to="/">Home</router-link></li>
      <li :class="{ 'active': activeMenu === 'about' }"><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: ''
    }
  },
  watch: {
    '$route.path' (newValue) {
      if (newValue.includes('home')) {
        this.activeMenu = 'home';
      } else if (newValue.includes('about')) {
        this.activeMenu = 'about';
      } else {
        this.activeMenu = '';
      }
    }
  }
}
</script>
<style scoped>
nav ul li.active {
  font-weight: bold;
  font-size: 18px;
  border-bottom: 2px solid #ccc;
}
</style>