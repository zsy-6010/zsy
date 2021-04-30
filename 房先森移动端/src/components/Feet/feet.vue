<template>

    <div class=''>
        <div class="zi">
            <span>房先森互联网家装有别于传统装修公司与其它装修中介平台，以自营模式整合设计师与项目经理，
                杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化订制服务。
            </span><br>
            <div class="xian"></div>
            <div class="feets">
                <div class="feets1"><i class="iconfont icon-hot-line"></i>服务热线：400-9977-658</div>
                <div class="feets2">
                    <ul>
                        <li>触屏版</li>
                        <li>电脑版</li>
                        <li>关于我们</li>
                        <li>联系我们</li>
                    </ul>
                </div>
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
.zi{
    width: 100%;
    height: 4rem;
    // border: black solid 1px;
    margin-top: 0.3rem;
    font-size: 0.28rem;
}
.xian{
    width: 100%;
    height: 0.2rem;
    margin-top: 0.3rem;
    background: whitesmoke;
    display: flex;
}
.feets{
    width: 100%;
    height: 1.5rem;
    margin-top: 0.3rem;
    // border: yellow solid 1px;
    .feets1{
        width: 100%;
        height: 0.7rem;
        // border: black solid 1px;
        line-height: 0.7rem;
        i{
            color: #39c894;
            font-size: 0.5rem;
        }
    }
    .feets2{
        width: 100%;
        height: 0.7rem;
        // border: black solid 1px;
        display: flex;
        ul{
            width: 100%;
            display: flex;
            align-items: center;
            li{
                width: 25%;      
            }
        }
    }
}
</style>
