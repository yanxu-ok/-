<template>
  <div class="home">
    <div class="progress">
      <div class="color" :style="{'width':(parseInt(score)*10)+'%'}"></div>
    </div>
    <div style="margin-left:10px">{{score}}分</div>
  </div>
</template>
<script>
export default {
  name: "Progress",
  props: {
    score: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.progress {
  width: 100px;
  height: 10px;
  background-color: rgba(229, 229, 229, 1);
  border-radius: 5px;
  .color {
    background-color: rgba(3, 92, 193, 1);
    height: 100%;
  }
  div:nth-child(2) {
    color: rgba(243, 12, 12, 1);
    font-size: 10px;
  }
}
.home {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>