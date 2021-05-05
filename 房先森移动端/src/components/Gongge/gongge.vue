<template>

    <div class=''>
        <div class="gongge">
            <div @click="one"><span style="background:#39c894"><i class="iconfont icon-case"></i></span><p>装修方案</p></div>
            <div @click="two"><span style="background:#feb505"><i class="iconfont icon-pics"></i></span><p>效果图</p></div>
            <div @click="three"><span style="background:#eed215"><i class="iconfont icon-designer"></i></span><p>设计师</p></div>
            <div @click="four"><span style="background:#00b2b2"><i class="iconfont icon-construction-site"></i></span><p>装修工地</p></div>
            <div @click="five"><span style="background:#1b9af7"><i class="iconfont icon-decorate"></i></span><p>装修攻略</p></div>
            <div @click="six"><span style="background:#7b72e9"><i class="iconfont icon-loans"></i></span><p>装修贷款</p></div>
            <div @click="seven"><span style="background:#ff4315"><i class="iconfont icon-pencle"></i></span><p>免费预约</p></div>
            <div @click="eight"><span style="background:#fe8864"><i class="iconfont icon-ten"></i></span><p>免费贷款</p></div>
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

    methods: {
        one(){
            this.$router.push({path:"/gmx-xiu"});
        },
        two(){
            this.$router.push({path:"/gmx-xgt"});
        },
         three(){
            this.$router.push({path:"/ZhzDesign"});
        },
         four(){
            this.$router.push({path:"/Zhzlives"});
        },
         five(){
            this.$router.push({path:"/ZsqRaiders"});
        },
         six(){
            this.$router.push({path:"/Zsqdaikuan"});
        },
         seven(){
            this.$router.push({path:"/zy-yuyue"});
        },
         eight(){
            this.$router.push({path:"/zy-baojia"});
        },
    },

};
</script>

<style lang='scss' scoped>
.gongge{
    width: 100%;
    height: 4.5rem;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    // border: black solid 1px;
    display: flex;
    flex-wrap: wrap;
    div{
        width: 25%;
        height: 50%;
        // border: black solid 1px;
        span{
            i{
                font-size: 0.7rem;
                color: white;
                margin-left: 0.3rem;
            }
            display: inline-block;
            width: 1.3rem;
            height: 1.3rem;
            border-radius: 50%;
        }
    }
}
p{
    font-size: 0.28rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
}
.xian{
    width: 100%;
    height: 0.2rem;
    background: whitesmoke;
}
</style>
