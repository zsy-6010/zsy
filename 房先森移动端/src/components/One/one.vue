<template>

  <div class="">

    <div class="box">

      <div class="box1">全无装修<span>包设计、包主材、包水电、包施工</span></div>
      
      <div class="boximg">
          <img src="/切图/img1.jpg" alt="">
      </div>

      <div class="foot">
          <div><i class="iconfont icon-zero"></i> 0增项，标准施工</div>
          <div><i class="iconfont icon-protection-fill"></i>杜绝项目外包</div>
          <div><i class="iconfont icon-price"></i>装修贷款</div>
      </div>

    </div>

    <div class="xian"></div>

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
.box {
  width: 96%;
  margin-left: 2%;
  height: 6.5rem;
//   border: black solid 1px;
  margin-top: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  .boximg {
    margin-top: -0.3rem;
    width: 100%;
    height: 4rem;
    // border: black solid 1px;
    img{
        width: 100%;
        height: 100%;
    }
  }
}
.foot {
  width: 100%;
  height: 0.6rem;
//   background: blanchedalmond;
  display: flex;
  align-items: center;
  justify-content: center;
  div{
      width: 33%;
      height: 0.6rem;
    //   border: solid black 1px;
      line-height: 0.6rem;
      font-size: 0.2rem;
      i{
          line-height: 0.6rem;
          font-size: 0.4rem;
          color: #39c894;
      }
  }
}
.box1{
        width: 100%;
        height: 0.7rem;
        // border: solid black 1px;
        border-left: #39c894 solid 0.1rem;
        font-size: 0.4rem;
        line-height: 0.7rem;
        span{
            font-size: 0.2rem;
            margin-left: 0.3rem;
            color: #999;
        }
}
.xian{
    width: 100%;
    height: 0.2rem;
    background: whitesmoke;
}
</style>
