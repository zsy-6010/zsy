<template>
  <div class="">
    <div class="box">
      <div class="box1"><span>装修攻略</span></div>

      <div class="box2">
        <div>
          <div class="zx1"><img src="/切图/07.jpg" alt="" /></div>
          <div class="zx2">房子交付要验房那个，验房师是做什么的？</div>
          <div class="zx3">
            <i class="iconfont icon-time">2016-07-07</i
            ><i class="iconfont icon-view">115</i>
          </div>
        </div>

        <div>
          <div class="zx1"><img src="/切图/08.jpg" alt="" /></div>
          <div class="zx2">能让您涨工资的家居风水！</div>
          <div class="zx3">
            <i class="iconfont icon-time">2016-07-07</i
            ><i class="iconfont icon-view">115</i>
          </div>
        </div>

        <div>
          <div class="zx1"><img src="/切图/09.png" alt="" /></div>
          <div class="zx2">遇到有这样房子的男人就嫁了吧</div>
          <div class="zx3">
            <i class="iconfont icon-time">2016-07-07</i
            ><i class="iconfont icon-view">115</i>
          </div>
        </div>
      </div>

      <div class="box4">
        <button>换一换 <i class="iconfont icon-change"></i></button>
        <button>更多装修攻略 <i class="iconfont icon-more"></i></button>
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

.box2 {
  width: 100%;
  height: 6.5rem;
  // background: wheat;
  div {
    width: 100%;
    height: 2rem;
    // border: black solid 1px;
    margin-top: 0.11rem;
    .zx1 {
      width: 2rem;
      height: 1.5rem;
      margin-top: 0.2rem;
      // background: chartreuse;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .zx2 {
      width: 4.5rem;
      height: 0.5rem;
      display: flex;
      // background: chocolate;
      margin-top: -1.5rem;
      margin-left: 2.2rem;
      font-size: 0.3rem;
    }
    .zx3 {
      width: 4.5rem;
      height: 0.5rem;
      display: flex;
      // background: cornflowerblue;
      margin-top: 0.4rem;
      margin-left: 2.2rem;
      line-height: 0.5rem;
      color: #999;
      
       i:nth-child(1) {
        font-size: 0.2rem;
      }

      i:nth-child(2) {
        margin-left: 1.5rem;
        font-size: 0.2rem;
      }
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
