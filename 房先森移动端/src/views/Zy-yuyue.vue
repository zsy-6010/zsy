<template>
  <div class>
    <!-- 图片 -->
    <div class="box">
      <img src="/切图/banner1.jpg" alt width="100%" />
    </div>
    <!-- 分割 -->
    <div class="box4"></div>
    <!-- 预约填表 -->
    <div class="box1">
      预约房先森服务
      <img src="/切图/common/icon_title.png" alt />
      <div class="xian1"></div>
      <div class="xian2"></div>
    </div>
    <!-- 预约申请 -->
    <div class="box2">
      <p>
        <input class="txt" type="text" id="district" placeholder="小区名" />
      </p>
      <p>
        <input class="txt" type="tel" id="district" placeholder="手机号" />
      </p>
      <p class="p2">
        <input type="text" class="txt1" id="district" placeholder="验证码" />
        <b>获取验证码</b>
      </p>
      <p>
        <input class="txt" type="text" id="district" placeholder="请填写建筑面积" />
        <span>㎡</span>
      </p>
      <button class="yue">立即预约</button>
    </div>
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
    <!-- 提供 -->
    <div class="box1">
      我们可以提供
      <img src="/切图/common/icon_title.png" alt />
      <div class="xian1"></div>
      <div class="xian2"></div>
    </div>
    <div class="box5">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <i class="iconfont" :class="[item.icon]"></i>
          <b>{{item.title}}</b>
          <p>{{item.content}}</p>
        </li>
      </ul>
    </div>
    <!-- 分割 -->
    <div class="box4"></div>


    <!-- 轮播 -->
    <div class="box1">
      他们这样评价
      <img src="/切图/common/icon_title.png" alt />
      <div class="xian1"></div>
      <div class="xian2"></div>
    </div>
    <div class="box7">

    </div>

    <!-- 分割 -->
    <div class="box4"></div>

    <jianjie></jianjie>
  </div>
</template>

<script>
import jianjie from '../components/Zy-fxsjianjie.vue'
export default {
  data() {
    return {
      list: [
        {
          icon: "icon-app",
          title: "产品系列",
          content: "半包、全包套餐、全屋定制及个性化升级"
        },
        {
          icon: "icon-price",
          title: "0元装修",
          content: "与建行合作贷款,实现0元开启装修"
        },
        {
          icon: "icon-live",
          title: "工地直播",
          content: "工地巡检照片、360度全景节点验收"
        },
        {
          icon: "icon-preferential",
          title: "合作优惠",
          content: "正品材料工厂直供,F2C让利用户"
        },
        {
          icon: "icon-construction-site",
          title: "参观工地",
          content: "随时预约参观工地,零距离感受施工工艺"
        },
        {
          icon: "icon-protection",
          title: "售后保障",
          content: "整装2年质保,隐蔽水电工程10年质保"
        }
      ]
    };
  },
  mounted() {},
  methods: {},
  components:{
      jianjie,
  }
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  background-color: rgb(255, 245, 245);
  height: 2.7rem;
}
.box4 {
  width: 100%;
  height: 0.16rem;
  background-color: #f6f6f6;
  margin-top: 0rem;
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
.box2 {
  margin-top: 0.36rem;
  width: 100%;
  //   height: 4rem;
  background-color: #ffffff;
  p {
    width: 96%;
    margin: 0 auto;
    position: relative;
    // display: flex;
    .txt {
      width: 90%;
      height: 0.8rem;
      line-height: 0.8rem;
      margin: 0 5% 0 5%;
      border: 1px solid #eaeaea;
      border-radius: 4px;
      font-size: 14px;
      text-indent: 1em;
      outline: none;
    }

    span {
      position: absolute;
      font-size: 0.4rem;
      color: black;
      top: 0.49rem;
      right: 0.5rem;
    }
  }
  .yue {
    width: 86.4%;
    font-size: 0.36rem;
    color: white;
    background-color: #feb505;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 4px;
    outline: none;
    border: none;
    margin-left: 0.49rem;
  }
  .p2 {
    width: 96%;
    margin: 0 auto;
    .txt1 {
      width: 50%;
      height: 0.8rem;
      line-height: 0.8rem;
      margin: 0 5% 0 5%;
      border: 1px solid #eaeaea;
      border-radius: 4px;
      font-size: 14px;
      text-indent: 1em;
      outline: none;
    }
    b {
      font-weight: normal;
      display: inline-block;
      font-size: 0.22rem;
      width: 35%;
      background-color: #fe8864;
      color: white;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
    }
  }
}
.box6 {
  margin-top: 0.3rem;
  width: 100%;
  height: 9.2rem;
  background-color: #f6f6f6;
  .im1 {
    width: 100%;
    margin-top: 0.3rem;
  }
}
.box5 {
  width: 96%;
  height: 5.4rem;
  background-color: rgb(255, 255, 255);
  margin: 0 auto .3rem;
  ul {
    margin-top: 0.45rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      width: 33.33%;
      height: 3rem;
      // box-sizing: border-box;
      // border: 1px solid #fafafa;
      i {
        margin: 0 auto;
        display: block;
        width: 1rem;
        height: 1rem;
        background-color: #39c894;
        font-size: 0.6rem;
        text-align: center;
        line-height: 1rem;
        color: white;
        border-radius: 50%;
      }
      b {
        margin: 0.18rem 0;
        display: block;
        text-align: center;
        font-weight: normal;
        color: #333333;
        font-size: 0.32rem;
      }
      p {
        font-size: 0.26rem;
        text-align: center;
        color: #999999;
      }
    }
  }
}
.box7{
    width: 100%;
    height: 5rem;
    // background-color: rgb(255, 248, 248);
}
</style>
