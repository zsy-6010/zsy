<template>

  <div class="">

    <div class="box">

      <div class="box1"><span>设计师</span></div>

      <div class="box2">

          <div class="box3">

              <div>
                  <div class="imga"></div>
                  <div class="namee">吴飞柯</div>
                  <div class="chji">优秀</div>
              </div>

              <div>
                  <div class="imga"></div>
                  <div class="namee">陆炎龙</div>
                  <div class="chji">主任</div>
              </div>

              <div>
                  <div class="imga"></div>
                  <div class="namee">张海建</div>
                  <div class="chji">总监</div>
              </div>

              <div>
                  <div class="imga"></div>
                  <div class="namee">陈冲</div>
                  <div class="chji">优秀</div>
              </div>

          </div>

          <div class="box4">
              <button>换一换 <i class="iconfont icon-change"></i></button>
              <button>更多设计师 <i class="iconfont icon-more"></i></button>
          </div>

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
  height: 5rem;
//   border: black solid 1px;
  margin-top: 0.2rem;
  display: flex;
  flex-wrap: wrap;
//   background: whitesmoke;
}
.box1{
        width: 100%;
        height: 0.7rem;
        // border: solid black 1px;
        border-left: #39c894 solid 0.1rem;
        font-size: 0.4rem;
        line-height: 0.7rem;
        span{
            margin-left: -4rem;
        }
}
.box2{
    width: 100%;
    height: 4rem;
    // border: black solid 1px;
    margin-top: 0.2rem;
}
.box3{
    width: 100%;
    height: 3rem;
    // background: yellow;
    display: flex;
    div{
        width: 25%;
        height: 100%;
        // border: black solid 1px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .imga{
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background: wheat;
            // border: solid black 1px;
        }
        .namee{
            width: 1.5rem;
            height: 0.5rem;
            // border: black solid 1px;
            font-size: 0.3rem;
        }
         .chji{
            width: 1.5rem;
            height: 0.5rem;
            // border: black solid 1px;
            font-size: 0.3rem;
            background: #39c894;
            color: white;
            border-radius: 0.1rem;
        }
    }
}
.box4{
    width: 100%;
    height: 1rem;
    // background: yellowgreen;
    display: flex;
    align-items: center;
    justify-content: center;
        button{
            width: 100%;
            height: 100%;
            font-size: 0.3rem;
            background: none;
            color: #39c894;
            border: solid 1px whitesmoke;
        }
}
.xian{
    width: 100%;
    height: 0.3rem;
    background: whitesmoke;
    margin-top: 0.3rem;
}

</style>
