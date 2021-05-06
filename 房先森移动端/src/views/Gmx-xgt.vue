<template>
    <div class='xgt'>
        <headers></headers>
        <div id="head"></div>
        <div id="hed">
            <span class="a1a">
                户型
                <i class="iconfont icon-down" style="color:grey;"></i>
            </span>
            <span class="a1a">
                区域
                <i class="iconfont icon-down" style="color:grey;"></i>
            </span>
            <span class="a1a">
                风格
                <i class="iconfont icon-down" style="color:grey;"></i>
            </span>
            <span class="aa">
                <i class="iconfont icon-search" style="color:#39c894; font-size:.6rem;"></i>
            </span>
        </div>
        <div id="head"></div>
        <div id="head"></div>
        <div id="head"></div>
        <div class="big">
            <div id="first" v-for="(item, index) in list" :key="index">
                <img :src="item.img" alt="" @click="tt(item)">
                <p style="font-size:.28rem;">{{item.name}}</p>
                <p style="font-size:.2rem; color:gray;">{{item.title}}</p>
            </div>
        </div>
        <div id="head"></div>
        <div id="head"></div>
        <div id="foo">
            <div class="aqa">
                上一页
            </div>
            <div id="middle">
                2/30
            </div>
            <div class="aqa">
                下一页
            </div>
        </div>
        <div id="head"></div>
        <div id="head"></div>
        <Fooot></Fooot>
    </div>
</template>

<script>
import Fooot from '../components/Fooot'
import headers from "../components/Header/headers.vue";
export default {
    components:{
        Fooot
    },
    data() {
        return {
            list:[{
                "img":"/OMG/1.jpg",
                "name":"欧美文化的抽象美感",
                "title":"混搭    三室    1100元/㎡"
            },
            {
                "img":"/OMG/2.jpg",
                "name":"曲线和非对称构成的雅致",
                "title":"简约    三室    1100元/㎡"
            },
            {
                "img":"/OMG/3.jpg",
                "name":"低彩度的温暖气息",
                "title":"混搭    三室    1100元/㎡"
            },
            {
                "img":"/OMG/4.jpg",
                "name":"减化繁复的装饰  简约精致",
                "title":"简约    三室    1100元/㎡"
            },
            {
                "img":"/OMG/5.jpg",
                "name":"新中式 静雅之秋",
                "title":"混搭    三室    1100元/㎡"
            },
            {
                "img":"/OMG/6.jpg",
                "name":"盛放之美的新古典",
                "title":"简约    三室    1100元/㎡"
            },
            {
                "img":"/OMG/7.jpg",
                "name":"清新素雅的田园风",
                "title":"混搭    三室    1100元/㎡"
            },
            {
                "img":"/OMG/8.jpg",
                "name":"龙湖春江彼岸",
                "title":"简约    三室    1100元/㎡"
            },
            {
                "img":"/OMG/9.jpg",
                "name":"流年似水，岁月静好",
                "title":"混搭    三室    1100元/㎡"
            },
            {
                "img":"/OMG/10.jpg",
                "name":"东方之美",
                "title":"简约    三室    1100元/㎡"
            },
            {
                "img":"/OMG/11.jpg",
                "name":"城市的新贵的欧式风格",
                "title":"混搭    三室    1100元/㎡"
            },
            {
                "img":"/OMG/12.jpg",
                "name":"爱情海，文化名园",
                "title":"简约    三室    1100元/㎡"
            }]
        };
    },
    mounted() {},
    methods: {
        tt(item){
            this.$router.push({name:"Gmx-xgt1",query:{obj:item}})
        }
    },
    components:{
        headers,
        Fooot
    }
};
</script>

<style lang='scss' scoped>
*{
    padding: 0;
    margin: 0;
}
.xgt{
    width:100vw;
    height:200vh;
    background-color: #eaeaea;
}
#head{
    width: 100%;
    height: .1rem;
    background-color: #eaeaea;
}
#hed{
    background-color: white;
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: space-around;
    font-size: .5rem;
    border-top: 1px solid#eaeaea;
    .a1a{
        height: .8rem;
        border-right: 1px solid #eaeaea;
        margin-top: .3rem;
        padding: 0 .2rem;
    }
    .aa{
        height: .8rem;
        margin-top: .4rem;
    }
}
.big{
    width: 90%;
    margin: auto;
    height: 20rem;
    display: flex;
    flex-wrap: wrap;
    #first{
        width: 47%;
        height: 3rem;
        background-color: white;
        text-align: center;
        margin: .1rem;
        img{
            width: 100%;
        }
    }
}
#foo{
    width: 90%;
    display: flex;
    justify-content: space-around;
    margin: auto;
    font-size: .4rem;
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    background-color: yellow;
    .aqa{
        flex: 1;
        height: 100%;
        background-color: #39c894;
        color: white;
    }
    #middle{
        flex: 1;
        background-color: white;
    }
}
</style>
