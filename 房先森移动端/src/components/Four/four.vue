<template>
  <div class="">
    <div class="box">
      <div class="box1"><span>效果图</span></div>

      <div class="img1"><img src="/切图/01.jpg" alt="" /></div>

      <div class="img2">
          <div><img src="/切图/02.jpg" alt=""></div>
          <div><img src="/切图/03.jpg" alt=""></div>
          <div><img src="/切图/04.jpg" alt=""></div>
          <div><img src="/切图/05.jpg" alt=""></div>
      </div>

      <div class="box4">
        <button>换一换 <i class="iconfont icon-change"></i></button>
        <button>更多效果图 <i class="iconfont icon-more"></i></button>
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
  height: 12rem;
//   border: black solid 1px;
  margin-top: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  .boximg {
    margin-top: -0.3rem;
    width: 100%;
    height: 4rem;
    // border: black solid 1px;
  }
}

.box1 {
  width: 100%;
  height: 0.7rem;
//   border: solid black 1px;
  border-left: #39c894 solid 0.1rem;
  // display: flex;
  font-size: 0.4rem;
  line-height: 0.7rem;
  span {
    margin-left: -4rem;
  }
}
.xian {
  width: 100%;
  height: 0.2rem;
  background: whitesmoke;
}
.img1 {
  display: flex;
  width: 100%;
  height: 4rem;
//   border: black solid 1px;
  margin-top: -0.3rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.img2 {
  width: 100%;
  height: 5rem;
//   background: oldlace;
  margin-top: -0.2rem;
  display: flex;
  flex-wrap: wrap;
  div{
      width: 48%;
      height: 2.5rem;
      margin-left: 1%;
      margin-top: 1%;
    //   border: black solid 1px;
      img{
          width: 100%;
          height: 100%;
      }
  }
}

.box4 {
  width: 100%;
  height: 1rem;
  // background: yellowgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
    background: none;
    color: #39c894;
    border: solid 1px whitesmoke;
  }
}
</style>
