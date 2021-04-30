<template>
    <div class='fangan1'>
         <div id="head"></div>
         <div id="jieshao">
            <img :src="item.img" alt="">
            <div id="right">
                <p style="font-size:.4rem;">{{item.xiang}}</p>
                <p style="color:red; font-size:.35rem;" ><span style="color:grey; font-size:.3rem;">价格：</span>{{item.price}}</p>
                <p style="font-size:.3rem;" ><span style="color:grey; font-size:.3rem;">已预约：</span>{{item.title}}</p>
                <p style="color:red; font-size:.3rem;" ><span style="color:grey; font-size:.3rem;">正式发售：</span>{{item.name}}</p>
            </div>
         </div>
         <div id="font">
             精装全包套餐，包设计/包主材/包施工/包监理。采用知名辅材、一线主材，
             工厂直供F2C模式
         </div>
         <div id="head"></div>
        <div id="zhanshi">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="套餐详情" name="first">
                <img src="/14方案详情_spec.png" alt="">
            </el-tab-pane>
            <el-tab-pane label="配置清单" name="second">
                <img src="/14方案详情-配置清单_spec.png" alt="">
            </el-tab-pane>
            <el-tab-pane label="施工工艺" name="third">
                <img src="/50.jpg" alt="">
            </el-tab-pane>
            <el-tab-pane label="服务流程" name="fourth">
                <img src="/51.jpg" alt="">
            </el-tab-pane>
        </el-tabs>
        <Fooot></Fooot>
        </div>

    </div>
</template>

<script>
import Fooot from '../components/Fooot'
export default {
    data() {
        return {
            item:this.$route.query.obj,
            activeName: 'first'
        };
    },
    mounted() {},
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    components:{
        Fooot
    }
};
</script>

<style lang='scss' scoped>
*{
    padding: 0;
    margin: 0;
}
.fangan1{
    width:100vw;
    height:100vh;
    background-color: #eaeaea;
}
#head{
    width: 100%;
    height: .1rem;
    background-color: #eaeaea;
}
#jieshao{
    width: 100%;
    height: 3.5rem;
    background-color: white;
    display: flex;
    img{
        width: 3rem;
        height: 3rem;
        margin-top: .2rem;
    }
    #right{
        width: 5rem;
        height: 3rem;
        margin-top: .2rem;
        p{
            margin-top: .2rem;
        }
    }
}
#font{
    width: 100%;
    height: 1.3rem;
    background-color: white;
    font-size: .1rem;
}
#zhanshi{
    width: 100%;
    height: 10rem;
    background-color: white;
    img{
        width: 100%;
    }
}
</style>
