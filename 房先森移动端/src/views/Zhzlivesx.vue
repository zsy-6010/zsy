<template>
  <div class="">
    <headers></headers>
    <div class="box">
      <div class="title">{{item.name}}<span>{{item.job}}</span></div>
      <div class="second">
        <span>户型：<span class="silver">{{item.bot1}}</span></span>
        <span class="key">面积：<span class="silver">{{item.bot2}}</span></span>
        <span class="key">装修预算：<span class="silver">18万</span></span>
      </div>
      <div class="tried">
        <span class="key">工地概况：<span class="silver">百万平米超级大盘，占据钱塘江北岸最美的江湾和湿地</span></span>
      </div>
      <div class="button">
        <div class="one">
          <i class="iconfont icon-pencle"></i>&emsp;评论&emsp;(10)
        </div>
        <div class="two">
          <i class="iconfont icon-tag"></i>&emsp;预约参观工地
        </div>
      </div>
    </div>
    <div class="content">
        <div class="people">
            <span>设计师：<a>吴飞柯</a></span>
            <span class="right">项目经理：<span class="silver">王永龙</span></span>
        </div>
        <div class="tit">
            <div class="sign">

            </div>
            <div class="date">
                2016-07-11
            </div>
            <div class="material">
                泥木
            </div>
            <div class="status">
                验收阶段
            </div>
        </div>
        <div class="Verify">
            泥木工程验收成功
        </div>
        <div class="pic">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="tit">
            <div class="sign">

            </div>
            <div class="date">
                2016-04-27
            </div>
            <div class="material">
                水电
            </div>
            <div class="status">
                验收阶段
            </div>
        </div>
        <div class="Verify">
            水电工程验收成功
        </div>
        <div class="pic">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="tit">
            <div class="sign">

            </div>
            <div class="date">
                2016-04-15
            </div>
            <div class="material">
                水电
            </div>
            <div class="status">
                施工阶段
            </div>
        </div>
        <div class="Verify">
            水电施工作业现场直播
        </div>
        <div class="pic">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    </div>
     <div class="bottom-content">
        <p>
          房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
        </p>
      </div>
      <foot></foot>
  </div>
</template>

<script>
import foot from '@/components/footer.vue'
import headers from "../components/Header/headers.vue";
export default {
  data() {
    return {
      item:this.$route.query.item
    };
  },
  mounted() {},
  methods: {},
  components:{
    foot,
    headers,
  }
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  padding: 0.36rem 0.2rem;
  box-sizing: border-box;
  .title {
    width: 100%;
    font-size: 0.38rem;
    span {
      display: inline-block;
      width: 1.6rem;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      background-color: #3ac994;
      border-radius: 3px;
      color: white;
      margin-left: 0.3rem;
    }
  }
  .second {
    width: 100%;
    font-size: 0.28rem;
    margin-top: 0.3rem;
    .key {
      margin-left: 0.3rem;
    }
  }
  .tried {
    width: 100%;
    font-size: 0.28rem;
    margin-top: 0.3rem;
    white-space: normal;
  }
  .button {
    width: 100%;
    height: 0.7rem;
    font-size: 0.35rem;
    display: flex;
    margin-top: .3rem;
    .one {
      width: 49.8%;
      text-align: center;
      border: 1px solid #f4f4f4;
      border-right: none;
      line-height: 0.7rem;
      color: #52b3f8;
    }
    .two {
      width: 49.8%;
      text-align: center;
      border: 1px solid #f4f4f4;
      line-height: 0.7rem;
      color: #5cd3a6;
    }
  }
}
.silver {
  color: #999;
}
.content{
    width: 100%;
    background-color: #F4F4F4;
    padding: .36rem .2rem;
    box-sizing: border-box;
    .people{
        font-size: .3rem;
        display: flex;
        a{
            color: #42BE85;
            text-decoration: underline;
        }
        .right{
            text-align: right;
            display: inline-block;
            width: 4.8rem;
        }
    }
    .tit{
        width: 100%;
        margin-top: .36rem;
        display: flex;
        flex-wrap: wrap;
        .sign{
            width: .45rem;
            height: .45rem;
            border-radius: 50%;
            background-color: #39C893;
            margin-right: .45rem;
        }
        .date{
            width: 1.8rem;
            font-size: .28rem;
            height: .6rem;
            text-align: center;
            line-height: .6rem;
            color: #666;
            background-color: #EAEAEA;
        }
        .material{
            width: 1.2rem;
            height: .6rem;
            text-align: center;
            line-height: .6rem;
            background-color: #39C893;
            color: white;
            font-size: .28rem;
        }
        .status{
            width: 1.6rem;
            height: .6rem;
            text-align: center;
            line-height: .6rem;
            background-color: #FEB603;
            color: white;
            font-size: .28rem;
            margin-left: .2rem;
        }
    }
    .Verify{
        font-size: .38rem;
        padding: .3rem .9rem;
        box-sizing: border-box;
    }
    .pic{
      width: 100%;
      ul{
        display: flex;
        flex-wrap: wrap;
        padding-left: .9rem;
        li{
          width: 32%;
          height: 3rem;
          background-color: #39C893;
          margin-right: .06rem;
          margin-bottom: .06rem;
        }
      }
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
