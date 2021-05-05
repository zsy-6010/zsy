<template>

    <div class=''>
        <div class="foot">
            <img src="/切图/foot.png" alt="">
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
.foot{
    width: 100%;
    height: 0.5rem;
    background: yellow;
    position: relative;
    
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
}
</style>
