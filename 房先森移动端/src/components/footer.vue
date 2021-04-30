<template>
  <div class="">
    <footer>
             
      <p id="hed">
        <i class="iconfont icon-hot-line" style="color: #39c894"></i
        > 服务热线：400-9977-658
      </p>
             
      <ul id="fot">
                   
        <li
          @click="tt(index)"
          v-for="(it, index) in list"
          :key="index"
          :class="qq == index ? 'ii' : ''"
        >
          {{ it.name }}
        </li>
               
      </ul>
        
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "触屏版",
        },
        {
          name: "电脑版",
        },
        {
          name: "联系我们",
        },
        {
          name: "关于我们",
        },
      ],
      qq: -1,
    };
  },
  mounted() {},
  methods: {
    tt(index) {
      this.qq = index;
    },
  },
};
</script>

<style lang='scss' scoped>
footer {
  margin-top: 0.3rem;
  width: 100%;
  height: 2.5rem;
  background-color: white;
  font-size: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  #hed {
    width: 6rem;
    height: 0.4rem;
    line-height: 0.6rem;
    margin-left: 1.9rem;
    margin-top: 0.3rem;
  }
  #fot {
    width: 100%;
    height: 0.8rem;
    list-style: none;
    display: flex;
    justify-content: space-around;
    .ii {
      color: #39c894;
    }
  }
}
</style>
