<template>
  <div class="">
    <div class="box">
      <div class="box1">
        装修预约<span>免费上门量房，设计方案免费为止</span>
      </div>

      <div class="inp">
        <van-form validate-first @failed="onFailed">
          <!-- 通过 pattern 进行正则校验 -->
          <van-field
            v-model="value1"
            name="pattern"
            placeholder="小区名"
            :rules="[{ pattern, message: '请输入正确内容' }]"
          />
          <!-- 通过 validator 进行函数校验 -->
          <van-field
            v-model="value2"
            name="validator"
            placeholder="手机号"
            :rules="[{ validator, message: '请输入正确内容' }]"
          />
          <!-- 通过 validator 进行异步函数校验 -->
          <van-field
            v-model="value3"
            name="asyncValidator"
            placeholder="建筑面积"
            :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
          />

          <div style="margin: 16px">
              
            <van-button background="#feb505" block type="info" native-type="submit"
              >立即申请</van-button>

          </div>
        </van-form>
      </div>
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

  methods: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 96%;
  margin-left: 2%;
  height: 5.4rem;
//   border: black solid 1px;
  margin-top: 0.2rem;
  display: flex;
  flex-wrap: wrap;
}
.box1 {
  width: 100%;
  height: 0.7rem;
  // border: solid black 1px;
  border-left: #39c894 solid 0.1rem;
  font-size: 0.4rem;
  line-height: 0.7rem;
  span {
    font-size: 0.2rem;
    margin-left: 0.3rem;
    color: #999;
  }
}
.inp {
  width: 100%;
  height: 4.5rem;
//   border: black solid 1px;
  margin-top: 0.2rem;
}
.xian{
    width: 100%;
    height: 0.2rem;
    background: whitesmoke;
}
</style>
