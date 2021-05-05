<template>
  <div class="">
    <div class="box">
      <div class="box1"><span>工地直播</span></div>

      <div class="img1"><img src="/切图/06.jpg" alt="" /></div>

      <div class="nam"><div class="zi">重汽嘉泽苑7幢<span>泥木工程</span></div></div>

      <div class="box4">
        <button>换一换 <i class="iconfont icon-change"></i></button>
        <button>更多工地直播 <i class="iconfont icon-more"></i></button>
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
  height: 9rem;
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
  height: 5rem;
//   border: black solid 1px;
  margin-top: -0.3rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.nam{
    width: 100%;
    height: 0.6rem;
    margin-top: -0.3rem;
    // background: blanchedalmond;
    font-size: 0.3rem;
    line-height: 0.6rem;
    .zi{
        margin-left: -3.5rem;
        span{
            margin-left: 0.5rem;
            background: #2bb281;
            color: white;
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
