<template>

    <div class=''>

        <div class="top">

            <div class="left"><img src="/切图/logo.png" alt=""></div>
            <div class="cont"></div>
            <div class="righ">
                <div><i class="iconfont icon-user"></i><br>我的</div>
                <div><i class="iconfont icon-nav"></i><br>导航</div>
            </div>

        </div>

    </div>

</template>

<script>

export default {

    data() {
        return {};
    },

    mounted() {},

    methods: {},

};
</script>

<style lang='scss' scoped>
.top{
    width: 100%;
    height: 1.35rem;
    // border: black solid 1px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    div{
        width: 2.2rem;
        height: 1rem;
        // display: flex;
        // border: black solid 1px;
    }
    .left{
        margin: 0.16rem 0rem 0.16rem 0.18rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.righ{
    display: flex;
    align-items: center;
    justify-content: center;
    i{
        font-size: 0.6rem;
        color: #999999;
    }
   div{
       width: 49%;
       height: 100%;
       font-size: 0.2rem;
       color: #999;
   }
}

</style>
