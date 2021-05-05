<template>
  <div class="">
    <div class="bottom">
      <div class="title">级别</div>
      <div class="leval">
        <span @click="check=1" :class="{checked:check==1}">不限</span>
        <span @click="check=2" :class="{checked:check==2}">总监</span>
        <span @click="check=3" :class="{checked:check==3}">主任</span>
        <span @click="check=4" :class="{checked:check==4}">优秀</span>
      </div>
      <div class="title">收费</div>
      <div class="leval">
        <span @click="checks=1" :class="{checked:checks==1}">不限</span>
        <span @click="checks=2" :class="{checked:checks==2}">0-50元/㎡</span>
        <span @click="checks=3" :class="{checked:checks==3}">50-100元/㎡</span>
        <span @click="checks=4" :class="{checked:checks==4}">100-150元/㎡</span>
        <span @click="checks=5" :class="{checked:checks==5}">200元/㎡以上</span>
      </div>
      <div class="confrim" @click="fun2">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        check:0,
        checks:0
    };
  },
  mounted() {},
  methods: {
      fun2(){
          this.$emit('fn2')
      }
  },
};
</script>

<style lang='scss' scoped>
.bottom {
  position: fixed;
  width: 100%;
  background-color: #f4f4f4;
  padding: 0.5rem 0.2rem 0.5rem 0.2rem;
  font-size: 0.28rem;
  box-sizing: border-box;
  .title {
    margin-bottom: 0.36rem;
  }
  .leval {
    width: 100%;
    span {
      width: 31.9%;
      height: 0.58rem;
      display: inline-block;
      text-align: center;
      background-color: #fff;
      color: #999;
      line-height: 0.58rem;
      margin-bottom: 0.25rem;
      margin-right: 0.1rem;
    }
  }
}
.confrim {
  width: 100%;
  height: 0.7rem;
  color: white;
  text-align: center;
  line-height: 0.7rem;
  font-size: 0.4rem;
  background-color: #39c893;
}
.checked{
    box-sizing: border-box;
    border: 1px solid #39C894;
    color: #39C894;
}
</style>
