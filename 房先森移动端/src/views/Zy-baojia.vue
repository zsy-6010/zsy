<template>
  <div class>
    <!-- 装修报价图片 -->
    <div class="box">
      <img src="/切图/10quoted.jpg" alt width="100%" />
    </div>
    <div class="box1">
      房先森10S报价
      <img src="/切图/common/icon_title.png" alt />
      <div class="xian1"></div>
      <div class="xian2"></div>
    </div>
    <!-- 装修报价申请 -->
    <div class="box2">
      <p>
        <input class="txt" type="text" id="district" placeholder="请填写建筑面积" />
        <span>㎡</span>
      </p>
      <p>
        <select class="txt">
          <option value="现代">现代</option>
          <option value="中式">中式</option>
          <option value="四合院">四合院</option>
        </select>
      </p>
      <p class="p2">
        <select class="txt1">
          <option value="1室">1室</option>
        </select>

        <select class="txt1">
          <option value="1厅">1厅</option>
        </select>
      </p>

      <p class="p3">
        <select class="txt2">
          <option value="1厨">1厨</option>
        </select>

        <select class="txt2">
          <option value="1卫">1卫</option>
        </select>

        <select class="txt2">
          <option value="1阳台">1阳台</option>
        </select>
      </p>

      <button class="shenqing">立即申请</button>
    </div>
    <!-- 装修报价 -->
    <div class="box3">
      <span class="sp1">装修报价</span>
      <p>
        全场装修总价:&emsp;&emsp;
        <span style="color:#ff4351;">81,889,79</span>元
      </p>
      <div class="font1">您还可以选择</div>
      <p style="margin:.36rem 0 .36rem 0">
        房先森装修半包套餐价,&emsp;&emsp;
        <span style="color:#eed215;">399</span>元/平米
      </p>
      <div class="yuyue">预约399套餐</div>
    </div>
    <!-- 分割 -->
    <div class="box4"></div>
    <div class="box1">
      我们可以提供
      <img src="/切图/common/icon_title.png" alt />
      <div class="xian1"></div>
      <div class="xian2"></div>
    </div>
    <!-- 提供 -->
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
    <jianjie></jianjie>
    <!-- 分割 -->
    <div class="box4"></div>

  </div>
</template>

<script>import jianjie from '../components/Zy-fxsjianjie.vue'
export default {
  data() {
    return {
      list:[
        {
          icon:"icon-app",
          title:"产品系列",
          content:"半包、全包套餐、全屋定制及个性化升级"
        },
        {
          icon:"icon-price",
          title:"0元装修",
          content:"与建行合作贷款,实现0元开启装修"
        },
        {
          icon:"icon-live",
          title:"工地直播",
          content:"工地巡检照片、360度全景节点验收"
        },
        {
          icon:"icon-preferential",
          title:"合作优惠",
          content:"正品材料工厂直供,F2C让利用户"
        },
        {
          icon:"icon-construction-site",
          title:"参观工地",
          content:"随时预约参观工地,零距离感受施工工艺"
        },
        {
          icon:"icon-protection",
          title:"售后保障",
          content:"整装2年质保,隐蔽水电工程10年质保"
        },
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
  .p2 {
    width: 96%;
    margin: 5% auto;
    display: flex;
    .txt1 {
      display: inline-block;
      width: 42.5%;
      height: 0.8rem;
      line-height: 0.8rem;
      border: 1px solid #eaeaea;
      border-radius: 4px;
      font-size: 14px;
      text-indent: 1em;
      outline: none;
      margin-left: 0.35rem;
    }
  }
  .p3 {
    width: 96%;
    margin: 5% auto 0;
    display: flex;
    .txt2 {
      display: inline-block;
      width: 26.8%;
      height: 0.8rem;
      line-height: 0.8rem;
      border: 1px solid #eaeaea;
      border-radius: 4px;
      font-size: 14px;
      text-indent: 1em;
      outline: none;
      margin-left: 0.35rem;
    }
  }
  .shenqing {
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
}
.box3 {
  width: 96%;
  // height: 4rem;
  border-radius: 4px;
  border: 1px dashed #39c894;
  // background-color: rgb(255, 242, 242);
  margin: 0 auto;
  margin-top: 0.56rem;
  position: relative;
  .sp1 {
    position: absolute;
    top: -0.3rem;
    left: 50%;
    transform: translate(-50%);
    font-size: 0.36rem;
    padding: 0.1rem 0.25rem;
    background-color: #fff;
    text-align: center;
  }
  p {
    font-size: 0.34rem;
    color: #999999;
    margin: 0.6rem 0 0 0;
    text-align: center;
  }
  .font1 {
    font-size: 0.34rem;
    color: #333333;
    margin: 0.65rem 0 0 0;
    text-align: center;
  }
  .yuyue {
    width: 86.4%;
    font-size: 0.36rem;
    color: #39c894;
    background-color: #ffffff;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    border-radius: 4px;
    outline: none;
    border: 1px solid #39c894;
    margin:0 auto 0.25rem;
    text-align: center;
  }
}
.box4 {
  width: 100%;
  height: 0.16rem;
  background-color: #f6f6f6;
  margin-top: 0.3rem;
}
.box5 {
  width: 96%;
  height: 5.4rem;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  ul{
    margin-top: .45rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li{
      width: 33.33%;
      height: 3rem;
      // box-sizing: border-box;
      // border: 1px solid #fafafa;
      i{
        margin: 0 auto;
        display: block;
        width: 1rem;
        height: 1rem;
        background-color:#39c894;
        font-size: .6rem;
        text-align: center;
        line-height: 1rem;
        color: white;
        border-radius: 50%;
      }
      b{
        margin: .18rem 0;
        display: block;
        text-align: center;
        font-weight: normal;
        color: #333333;
        font-size: .32rem;
      }
      p{
        font-size: .26rem;
        text-align: center;
        color: #999999;
      }
    }
  }
}


</style>
