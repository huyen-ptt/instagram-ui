<template>
  <div>
    <p>{{ hours }} hours since the photo was posted.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postDate: new Date("2022-12-25T12:00:00Z") // Thời điểm đăng ảnh
    }
  },
  computed: {
    hours() {
      const now = new Date(); // Lấy thời điểm hiện tại
      const diff = now - this.postDate; // Tính khoảng cách thời gian giữa 2 điểm (tính bằng mili giây)
      return Math.floor(diff / (1000 * 60 * 60)); // Chia cho số mili giây trong 1 giờ để tính ra số giờ
    }
  }
}
</script>