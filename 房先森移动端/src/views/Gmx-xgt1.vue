<template>
    <div class='xgt1'>
        <headers></headers>
        <ul id="heddd">
            <li class="a11a">
                <i @click="tt" class="iconfont icon-back" style="color:gray; font-size:.8rem;"></i>
            </li>
            <li class="a1a" style="font-size:.4rem;">{{item.name}}</li>
            <li class="a111a" style="font-size:.2rem;"> 
                <i class="iconfont icon-nav" style="color:gray; font-size:.5rem;"></i>
                导航
            </li>
        </ul>
        <div id="black">
            <div id="heaa"></div>
            <img :src="item.img" @click="next">
            <el-steps :active="active" finish-status="success">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
            <div id="xiao">
                设计诠释：less is more 不需要过多的装饰，
                简单的墙面背景与简洁的家居即可组成一个温
                暖的家
            </div>
        </div>
        <div id="head"></div>
        <Fooot></Fooot>
    </div>
</template>

<script>
import Fooot from '../components/Fooot'
import headers from "../components/Header/headers.vue";
export default {
    data() {
        return {
            item:this.$route.query.obj,
            active: 0
        };
    },
    mounted() {},
    methods: {
    next() {
        if (this.active++ > 2) this.active = 0;
      },
      tt(){
          this.$router.go(-1)
      }
    },
    components:{
        Fooot,
        headers,
    },
};
</script>

<style lang='scss' scoped>
*{
    padding: 0;
    margin: 0;
}
#heddd{
    width: 100%;
    height: 1.2rem;
    display: flex;
    text-align: center;
    justify-content: space-around;
    .a1a{
        width: 75%;
        line-height: 1.2rem;
    }
    .a11a{
        width: 15%;
    }
    .a111a{
        width: 10%;
        margin-top: .25rem;
    }
}
#black{
    width: 100%;
    height: 9.5rem;
    background-color: #202020;
    #heaa{
        width: 100%;
        background-color: #202020;
        height: 1.5rem;
    }
    img{
        width: 100%;
    }
    #xiao{
        width: 90%;
        margin: auto;
        font-size: .33rem;
        color: white;
        font-weight: 100;
    }
}
#head{
    width: 100%;
    height: .1rem;
    background-color: #eaeaea;
}
</style>
