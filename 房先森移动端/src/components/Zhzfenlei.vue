<template>
  <div class="fenlei">
    <div class="xuanxiang">
      <div @click="fun">筛选</div>
      <div>风格</div>
      <div>排序</div>
      <div><i class="iconfont icon-search search"></i></div>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    fun() {
      this.$emit("fn");
    },
  },
};
</script>

<style lang='scss' scoped>
.fenlei {
  width: 100%;

  border-bottom: 10px solid #eaeaea;
  .xuanxiang {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 25%;
      font-size: 0.4rem;
      text-align: center;
      height: 1.2rem;
      line-height: 1.2rem;
      .search {
        color: #39c894;
        font-size: 0.5rem;
      }
    }
  }
  
}
</style>
