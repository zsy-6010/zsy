<template>
  <div class>
    <headers></headers>
    <!-- 地图 -->
    <div class="box1">
      <img src="/zy-map.png" alt />
    </div>
    <!-- 定位  电话 -->
    <div class="dizhi">
      <div class="dizhi-left">
        <div class="left-yuan">
          <i class="iconfont icon-location"></i>
        </div>
        <p class="p1">杭州市滨江区长河街道越达巷79号连连大厦A幢301</p>
      </div>
      <div class="dizhi-right">
        <div class="right-yuan">
          <i class="iconfont icon-tel"></i>
        </div>
        <p class="p1">400-9977-658</p>
      </div>
    </div>
    <!-- 二维码 -->
    <div class="erwm">
      <img src="/zy-erweima.png" alt />
      <p class="pp">长按识别二维码关注微信咨询</p>
    </div>
    <!-- 简介 -->
    <jianjie></jianjie>
        <!-- 分割 -->
    <div class="box4"></div>
  </div>
</template>

<script>
import jianjie from '../components/Zy-fxsjianjie.vue'
import headers from "../components/Header/headers.vue";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components:{
      jianjie,
      headers,
  }
};
</script>

<style lang='scss' scoped>
.box1 {
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.dizhi {
  width: 96%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.65rem;
  .dizhi-left {
    width: 50%;
    position: relative;
    .left-yuan {
      width: 1.2rem;
      height: 1.2rem;
      background-color: #39c894;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      line-height: 1rem;
      text-align: center;

      i {
        font-size: 0.7rem;
        color: white;
      }
    }
    .p1 {
      position: absolute;
      top: 1.5rem;
      left: 0.2rem;
      margin: 0 auto;
      font-size: 0.28rem;
      width: 90%;
      text-align: center;
      color: #333333;
    }
  }
  .dizhi-right {
    width: 50%;
    position: relative;
    .right-yuan {
      width: 1.2rem;
      height: 1.2rem;
      background-color: #39c894;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      line-height: 1rem;
      text-align: center;

      i {
        font-size: 0.7rem;
        color: white;
      }
    }
    .p1 {
      position: absolute;
      top: 1.5rem;
      left: 0.2rem;
      margin: 0 auto;
      font-size: 0.28rem;
      width: 90%;
      text-align: center;
      color: #333333;
    }
  }
}
.erwm {
  margin-top: 2.76rem;
  width: 100%;
  height: 4.4rem;
  background-color: #eaeaea;
  position: relative;
  img {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
  .pp {
    font-size: 0.28rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 400%);
  }
}
.box4 {
  width: 100%;
  height: 0.16rem;
  background-color: #f6f6f6;
  margin-top: 0.3rem;
}
</style>
