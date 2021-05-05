<template>
    
    <div class='gmx-bgc'>
        <headers></headers>
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
                        <p class="font1" style="text-align: left;">{{item.xiang}}</p>
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
                        <p class="font1" style="text-align: left;">{{item.xiang}}</p>
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
      <Fooot></Fooot>
    </div>
</template>

<script>
import Fooot from '../components/Fooot'
import headers from "../components/Header/headers.vue";
export default {
    data() {
        return {
            lss:[{
                "img":"/切图/case/case.jpg",
                "name":"可选399元/㎡品牌主材包",
                "price":"￥399元/㎡",
                "title":"295套",
                "xiang":"399元/㎡半包装修套餐"
            }],
            lst:[{
                  "img":"/切图/case/case1.jpg",
                  "id":1,
                  "name":"全包套餐火爆预约中",
                  "price":"￥699元/㎡",
                  "title":"221套",
                  "xiang":"699元/㎡全包精装套餐"
            }],
        };
    }, 
    mounted() {},
    methods: {
        yy(item){
            this.$router.push({name:"Gmx-fang",query:{obj:item}})
        }
    },
    components:{
        Fooot,
        headers,
    }
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

</style>
