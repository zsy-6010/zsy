<template>
  <div>
    <div class="top-img">
      <img src="/切图/process/process1.jpg" alt />
    </div>
    <div class="box-img1">
      <p class="p1">【装修前】</p>
      <p class="p2">NO.1收房验房</p>
      <p class="p3">NO.2装修预算</p>
      <p class="p4">NO.3装修风水</p>
      <p class="p5">NO.4装修设计</p>
      <img src="/切图/process/process2.jpg" alt />
    </div>
    <div class="box-img2">
      <img src="/切图/process/process3.png" alt />
      <p class="p1">【装修中】</p>
      <p class="p2">NO.5材料选择</p>
      <p class="p3">NO.6水电工程</p>
      <p class="p4">NO.7泥木工程</p>
      <p class="p5">NO.8油漆工程</p>
    </div>
    <div class="box-img3">
      <img src="/切图/process/process4.jpg" alt />
       <p class="p1">【装修后】</p>
      <p class="p2">NO.9装修验房</p>
      <p class="p3">NO.10去污保洁</p>
      <p class="p4">NO.11软装搭配</p>
      <p class="p5">NO.12家居生活</p>
      <span></span>
    </div>
  </div>
</template>
<script>
// import  from '../components/'
export default {
  components: {
    // 注册子组件
  },
  data() {
    return {};
  },
  methods: {
    // 方法
  },
  computed: {
    // 计算
    num1() {
      let res = 0;

      return res;
    },
  },
  filters: {
    // 过滤
  },
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.25rem;
}
.top-img {
  width: 100%;
  height: 2.5rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.box-img1 {
  width: 100%;
  height: 8.6rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .p1 {
    font-size: 0.5rem;
    color: red;
    position: absolute;
    top: 0.35rem;
    left: 0.9rem;
  }
  .p2 {
    font-size: 0.4rem;
    position: absolute;
    top: 1.88rem;
    left: 1.8rem;
  }
  .p3 {
    font-size: 0.4rem;
    position: absolute;
    top: 3.5rem;
    right: 2rem;
  }
  .p4 {
    font-size: 0.4rem;
    position: absolute;
    top: 5rem;
    left: 1.8rem;
  }
  .p5 {
    font-size: 0.4rem;
    position: absolute;
    top: 6.6rem;
    right: 2rem;
  }
}
.box-img2 {
  position: relative;
  width: 100%;
  height: 8.6rem;
  img {
    width: 100%;
    height: 100%;
  }
   .p1 {
    font-size: 0.5rem;
    color: #1b9af7;
    position: absolute;
    top: 0.35rem;
    right: 0.9rem;
  }
  .p2 {
    font-size: 0.4rem;
    position: absolute;
    top: 1.88rem;
    right: 1.8rem;
  }
  .p3 {
    font-size: 0.4rem;
    position: absolute;
    top: 3.5rem;
    left: 2rem;
  }
  .p4 {
    font-size: 0.4rem;
    position: absolute;
    top: 5rem;
    right: 1.8rem;
  }
  .p5 {
    font-size: 0.4rem;
    position: absolute;
    top: 6.6rem;
    left: 2rem;
  }
}
.box-img3 {
  position: relative;
  width: 100%;
  height: 8.6rem;
  img {
    width: 100%;
    height: 100%;
  }
    .p1 {
    font-size: 0.5rem;
    color: #7b72e9;
    position: absolute;
    top: 0.3rem;
    left: 0.9rem;
  }
  .p2 {
    font-size: 0.4rem;
    position: absolute;
    top: 1.65rem;
    left: 1.8rem;
  }
  .p3 {
    font-size: 0.4rem;
    position: absolute;
    top: 3.1rem;
    right: 2rem;
  }
  .p4 {
    font-size: 0.4rem;
    position: absolute;
    top: 4.5rem;
    left: 1.8rem;
  }
  .p5 {
    font-size: 0.4rem;
    position: absolute;
    top: 5.95rem;
    right: 2rem;
  }
}
</style>
