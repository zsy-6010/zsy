<template>
    <div class=''>
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
            qq:-1
        };
    },
    mounted() {},
    methods: {
        tt(index){
            this.qq=index
        },
    },
};
</script>

<style lang='scss' scoped>
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
