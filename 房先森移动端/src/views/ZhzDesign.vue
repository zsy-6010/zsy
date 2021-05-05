<template>
  <div class="">
    <fenl @fn="fn1()"></fenl>
    <fenlei v-show="show" @fn2="fn2"></fenlei>
    <div class="mask" v-show="show" @click.stop="show=false">
        
    </div>
    <div class="list">
      <ul>
        <li v-for="(item, index) in data" :key="index" @click="gotodetil(item)">
          <div class="img">
            <div></div>
          </div>
          <div class="text">
            <div class="frist">
              <span class="name">{{ item.name }}</span>
              <span class="title">{{ item.class }}</span>
              <div>
                <span class="num">{{ item.hot }}</span>
                <span class="hot">人气</span>
              </div>
            </div>
            <div class="second">
              <div class="clas">
                <span class="cla">作品：</span>
                <span class="content">{{ item.zuopin }}个</span>
              </div>
              <div class="clas">
                <span class="cla">经验：</span>
                <span class="content">{{ item.exp }}</span>
              </div>
              <div class="clas">
                <span class="cla">评价：</span>
                <span class="content">{{ item.pingjia }}</span>
              </div>
              <div class="clas">
                <span class="cla">擅长风格：</span>
                <span class="content"
                  ><span v-for="(i, ind) in item.style" :key="ind">{{
                    i
                  }}</span></span
                >
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="fenye">
        <div class="up">上一页</div>
        <div class="pagenum">1/30</div>
        <div class="down">下一页</div>
      </div>
      <div class="bottom-content">
        <p>
          房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
        </p>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import fenl from "@/components/Zhzfenlei.vue";
import fenlei from "@/components/fenlei.vue";
import foot from "@/components/footer.vue";
export default {
  data() {
    return {
      data: [],
      show:false
    };
  },
  mounted() {
    this.$axios("./data.json").then((res) => {
      this.data = res.data.data;
      console.log(this.data);
    });
  },
  methods: {
      fn1(){
          this.show=true
          console.log(this.show);
      },
      fn2(){
          this.show=false
      },
      gotodetil(item){
        this.$router.push({path:'/ZhzDesignx',query:{item}})
      }
  },
  components: {
    fenl,
    fenlei,
    foot
  },
};
</script>

<style lang='scss' scoped>
.mask {
  width: 100%;
  height: 10rem;
  position: fixed;
  top: 7.5rem;
  background-color: rgba(0, 0, 0, 0.308);
//   z-index: 50;
}
.list {
  width: 100%;

  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      padding: 0.36rem 0;
      border-bottom: 1px solid #f4f4f4;
      .img {
        padding: 0 0.22rem;
        div {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
          background-color: #39C894;
        }
      }
      .text {
        width: 100%;
        // display: flex;
        // flex-wrap: wrap;
        height: 1.6rem;
        .frist {
          width: 100%;
          //   height: .5rem;
          margin-bottom: 0.28rem;
          display: flex;
          overflow: hidden;
          .name {
            font-size: 0.36rem;
            color: #000;
            // text-align: left;
            margin-right: 0.22rem;
          }
          .title {
            width: 0.8rem;
            text-align: left;
            height: 0.4rem;
            font-size: 0.24rem;
            line-height: 0.4rem;
            text-align: center;
            color: #fff;
            margin-top: 0.05rem;
            border-radius: 3px;
            background-color: #39c894;
          }
          div {
            font-size: 0.28rem;
            text-align: right;
            margin-left: 2rem;
            margin-top: 0.05rem;
            .num {
              color: #feb505;
            }
          }
        }
        .second {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          font-size: 0.28rem;
          .clas {
            margin-right: 0.5rem;
            margin-bottom: 0.2rem;
            .cla {
              color: #333;
            }
            .content {
              color: #999;
            }
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
    background-color: #eaeaea;
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
.bottom-content {
  text-indent: 2em;
  width: 100%;
  padding: 0 0.3rem;
  box-sizing: border-box;
  border-bottom: 10px solid #eaeaea;
  font-size: 0.28rem;
  line-height: .5rem;
}
</style>
