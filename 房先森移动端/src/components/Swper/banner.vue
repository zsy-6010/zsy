<template>
  <div class="">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="/切图/banner1.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="/切图/banner2.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="/切图/banner3.jpg" alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang='scss' scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.2rem;
  line-height: 0rem;
  text-align: center;
//   background-color: #39a9ed;
}
img{
    width: 100%;
    height: 100%;
}
</style>
