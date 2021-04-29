<template>
    <div class='fangan1'>
         <div id="head"></div>
         <div id="jieshao">
            <img :src="item.img" alt="">
         </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item:this.$route.query.obj
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style lang='scss' scoped>
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
    height: 3rem;
    background-color: white;
    img{
        width: 3rem;
        height: 2.5rem;
    }
}
</style>
