<template>
  <div class="">
    <headers></headers>
    <fenl @fn="fn1()"></fenl>
    <fenlei v-show="show" @fn2="fn2"></fenlei>
    <div class="mask" v-show="show" @click.stop="show = false"></div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in data" :key="index" @click="gotodetil(item)">
          <div class="img">
            <div></div>
          </div>
          <div class="text">
            <div class="frist">
              {{ item.name }}
            </div>
            <div class="second">
              <span>{{ item.job }}</span
              ><i class="iconfont icon-panorama alls" v-show="item.status"></i>
            </div>
            <div class="tried">
              <span>{{ item.bot1 }}</span
              ><span class="spans">{{ item.bot2 }}</span
              ><span class="spans"
                ><i class="iconfont icon-location"></i>{{ item.bot3 }}</span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="fenye">
      <div class="up">上一页</div>
      <div class="pagenum">2/30</div>
      <div class="down">下一页</div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import fenl from "@/components/Zhzfenlei.vue";
import fenlei from "@/components/fenlei.vue";
import foot from "@/components/footer.vue";
import headers from "../components/Header/headers.vue";

export default {
  data() {
    return {
      show: false,
      data: [],
    };
  },
  mounted() {
    this.$axios("./lives.json").then((res) => {
      this.data = res.data.data;
      console.log(this.data);
    });
  },
  methods: {
    fn1() {
      this.show = true;
    },
    fn2() {
      this.show = false;
    },
    gotodetil(item){
      this.$router.push({path:'/Zhzlivesx',query:{item}})
    }
  },
  components: {
    fenl,
    fenlei,
    foot,
    headers,
  },
};
</script>

<style lang='scss' scoped>
.mask {
  width: 100%;
  height: 10rem;
  position: fixed;
  top: 7.9rem;
  background-color: rgba(8, 8, 8, 0.308);
  //   z-index: 50;
}
.list {
  width: 100%;
  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 0.25rem 0.1rem;
      .img {
        div {
          width: 2.8rem;
          height: 2.6rem;
          background-color: rgb(12, 190, 107);
        }
      }
      .text {
        width: 100%;
        height: 2.6rem;
        padding: 0 0.25rem;
        .frist {
          font-size: 0.36rem;
          color: #000;
          margin-bottom: 0.48rem;
        }
        .second {
          font-size: 0.24rem;
          span {
            width: 1.1rem;
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            display: inline-block;
            background-color: #39c994;
            color: white;
            border-radius: 3px;
          }
          margin-bottom: 0.48rem;
          .alls {
            margin-left: 0.25rem;
          }
        }
        .tried {
          font-size: 0.3rem;
          color: #999999;
          .spans {
            margin-left: 0.47rem;
          }
        }
      }
    }
  }
}
.fenye {
  width: 100%;
  padding: 0.3rem 3.5%;
  box-sizing: border-box;
  font-size: 0.3rem;
  display: flex;
  border-bottom: 10px solid #eaeaea;
  .up {
    width: 33.3%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #39c894;
    color: white;
  }
  .pagenum {
    height: 0.8rem;
    line-height: 0.8rem;
    width: 33.3%;
    text-align: center;
    border-bottom: 1px solid #f4f4f4;
    border-top: 1px solid #f4f4f4;
  }
  .down {
    height: 0.8rem;
    line-height: 0.8rem;
    width: 33.3%;
    text-align: center;
    background-color: #39c894;
    color: white;
  }
}
</style>
