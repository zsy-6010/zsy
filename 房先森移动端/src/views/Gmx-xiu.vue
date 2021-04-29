<template>
    <div class='gmx-bgc'>
        <p id="head"></p>
        <div id="first" v-for="(item,index) in lss" :key="index">
            <div id="im">
                <div id="green">
                    局部装修
                </div>
                <div class="triangle"></div>
                <img :src="item.img" @click="yy(item)">
                <div id="font">
                    <div id="right">
                        <p class="font1" style="text-align: left;">399元/㎡半包装修套餐</p>
                        <p class="font2" style="text-align: left;"><span style="color:grey;">特惠：</span>{{item.name}}</p>
                        </div>
                    <div id="left">
                        <div id="red">
                                已预约295套
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="first"  v-for="item in lst" :key="item.id">
            <div id="im">
                  <div id="green">
                    全屋套餐
                </div>
                <div class="triangle1"></div>
                <img :src="item.img" @click="yy(item)">
                <div id="font">
                    <div id="right">
                        <p class="font1" style="text-align: left;">699元/㎡全包精装套餐</p>
                        <p class="font2" style="text-align: left;"><span style="color:grey;">正在发售：</span>{{item.name}}</p>
                        </div>
                    <div id="left">
                        <div id="red">
                                已预约221套
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="wenzi1">
   <div id="wenzi">
            房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，播过去中间环节，提供装修套餐 + 个性化定制服务。
        </div>
        </div>
  <footer>
       <p id="hed"><i class="iconfont icon-hot-line" style="color: #39c894;"></i> 服务热线：400-9977-658</p>
       <ul id="fot">
           <li @click="tt(index)" v-for="(it,index) in list" :key="index" :class="qq==index?'ii':''">{{it.name}}</li>
       </ul>
  </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[{
                "name":"触屏版"
            },
            {
                "name":"电脑版"
            },
            {
                "name":"联系我们"
            },
            {
                "name":"关于我们"
            }],
            lss:[{
                "img":"/切图/case/case.jpg",
                "name":"可选399元/㎡品牌主材包",
                 "price":"￥399元/㎡",
                 "title":"295套"
            }],
            lst:[{
                  "img":"/切图/case/case1.jpg",
                  "id":1,
                  "name":"全包套餐火爆预约中",
                  "price":"￥699元/㎡",
                  "title":"221套"
            }],
            qq:-1
        };
    }, 
    mounted() {},
    methods: {
        tt(index){
            this.qq=index
        },
        yy(item){
            this.$router.push({name:"Gmx-fang",query:{obj:item}})
        }
    },
};
</script>

<style lang='scss' scoped>
*{
    padding: 0;
    margin: 0;
}#head{
    width: 100%;
    height: .1rem;
    background-color: #eaeaea;
}
.gmx-bgc{
    width: 100vw;
    height: 100vh;
    background-color: #eaeaea;
}
#first{
    width: 7rem;
    height: 4.3rem;
    margin: auto;
    margin-top: .2rem;
    position: relative;
    background-color: #fff;
    #im{
        width: 100%;
        height: 2rem;
          z-index: 7;
        img{
            width: 100%;
        }
    }
    #green{
        position: absolute;
        top: .15rem;
        left: -.2rem;
        background-color: #2bb281;
        width: 1.3rem;
        text-align: center;
        height: .4rem;
        line-height: .4rem;
        font-size: .2rem;
        font-weight: 100;
        color:white;
        z-index: 9;
    }
    .triangle{
        position: absolute;
        top: .3959995rem;
        left: -.145rem;
		width: 0;
		height: 0;
        transform:rotate(45deg);
		border: .15rem solid;
		border-top-color:white;
		border-bottom-color:#2bb281;
		border-right-color:#F0EBE5;
		border-left-color:#eaeaea;
        }
    .triangle1{
        position: absolute;
        top: .3905rem;
        left: -.145rem;
		width: 0;
		height: 0;
        transform:rotate(45deg);
		border: .15rem solid;
		border-top-color:white;
		border-bottom-color:#2bb281;
		border-right-color:#D8C6B2;
		border-left-color:#eaeaea;
        }
    #font{
        width: 7rem;
        height: 1.4rem;
        font-size: .4rem;
        display: flex;
      #right{
          flex: 2.5;
          height: 100%;
          .font1{
              margin-left: .3rem;
          }
    .font2{
        margin-left: .3rem;
        font-size: .3rem;
        color: red;
        }
      }
      #left{
          flex: 1.2;
          #red{
              width: 100%;
              height: 1rem;
              background-color: red;
              border-top-left-radius: .7rem;
              border-bottom-left-radius: .7rem;
              line-height: 1rem;
              text-align: center;
              color: white;
              font-size: .3rem;
              font-weight: 100;
          }
      }
    }
}
#wenzi1{
    width: 100%;
    height: 2.1rem;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    margin-top: .3rem;
    #wenzi{
    width: 100%;
    margin-top: .2rem;
    height: 1.8rem;
    background-color: white;
    font-size: .3rem;
    text-indent: 2em;
    font-weight: 100;
}
}
footer{
    margin-top: .3rem;
    width: 100%;
    height: 2.5rem;
    background-color: white;
    font-size: .3rem;
    display: flex;
    flex-wrap: wrap;
    #hed{
        width: 6rem;
        height: .4rem;
        line-height: .6rem;
        margin-left: 1.9rem;
        margin-top: .3rem;
    }
    #fot{
        width: 100%;
        height: .8rem;
        list-style: none;
        display: flex;
        justify-content: space-around;

    }
}
.ii{
    color: #39c894;
}
</style>
