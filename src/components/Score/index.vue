<template>
  <div>
    <div class="score_home">
      <ul>
        <template v-for="(item, index) in 10">
          <li :key="index" :class="[item <= parseInt(score) ? trueStyle:falseStyle]">{{item}}</li>
        </template>
      </ul>
      <div>{{score}}分</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "score",
  props: {
    score: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      trueStyle: "trueStyle",
      falseStyle: "falseStyle"
    };
  },
  methods: {}
};
</script>

<style lang='less' scoped>
ul {
  width: 350px;
  height: 31px;
  display: flex;
  justify-content: flex-start;
  list-style: none;
  li:nth-child(n) {
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(229, 229, 229, 1);
    text-align: center;
    line-height: 31px;
    border-right: 1px solid white;
    color: black;
    font-size: 14px;
  }
}
.trueStyle {
  background-color: rgba(3, 92, 193, 1) !important;
  color: white !important;
}
.score_home {
  display: flex;
  align-items: center;
  div:nth-child(2) {
    margin-left: 10px;
    color: rgba(212, 48, 48, 1);
    font-size: 14px;
    line-height: 150%;
  }
}
</style>