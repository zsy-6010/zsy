<template>
  <div class>
    <!-- 图片 -->
    <div class="box">
      <img src="/zy-about-img.png" alt />
    </div>
    <!-- 简介 -->
    <div class="box1">
      房先森简介
      <img src="/切图/common/icon_title.png" alt />
      <div class="xian1"></div>
      <div class="xian2"></div>
    </div>
    <p class="text">
      房先森互联网装修平台由杭州瑞壹网各科技
      有限公司于2015年成立上线，房先森立足刚
      需房，专注于家庭装修服务，利用互联网将
      装修、供应链、金融进行融合，多维度实现
      用户对设计师、工长、工地、材料等的线上
      选择体验，房先森以自营的模式真正意义上
      过滤掉传统家装公司利润，将利润让给业主。
      房先森与银行合作的专项装修贷款能够解决
      业主装修资金问题，并以装修套餐+个性化
      定制的模式，提供创新型装修服务。
    </p>
    
    <!-- 我们如何与众不同 -->
    <div class="box6">
      <div class="box1">
        我们是谁，我们如何与众不同？
        <img src="/切图/common/icon_title.png" alt />
        <div class="xian1"></div>
        <div class="xian2"></div>
      </div>
      <img src="/切图/2.png" alt class="im1" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  img {
    width: 100%;
  }
}
.box1 {
  width: 96%;
  height: 1.08rem;
  // background-color: rgb(255, 241, 241);
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.36rem;
  margin: 0 auto;
  // border-bottom: 1px solid #d7d7d7;
  position: relative;
  img {
    width: 0.9rem;
    position: absolute;
    bottom: -0.14rem;
    left: 50%;
    transform: translate(-50%);
  }
  .xian1 {
    width: 2.8rem;
    border: 0.01rem solid #d7d7d7;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .xian2 {
    width: 2.8rem;
    border: 0.01px solid #d7d7d7;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
.text {
  width: 96%;
  text-indent: 2em;
  font-size: 0.28rem;
  color: #333333;
  line-height: 0.5rem;
  margin: 0.32rem auto 0.38rem;
}
.box4 {
  width: 100%;
  height: 0.16rem;
  background-color: #f6f6f6;
}
.box6 {
  width: 100%;
  height: 9.2rem;
  background-color: #f6f6f6;
  .im1 {
    width: 100%;
    margin-top: 0.3rem;
  }
}
</style>
