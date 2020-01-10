<template>
  <div>
    <div class="game_home" v-for="(item, index) in gameInfo" :key="index">
      <!-- 左侧 -->
      <div class="game_home_left">
        <div class="left_home">
          <div class="left_home_img">
            <img src="@/assets/img/66.jpg" />
          </div>
          <div>
            <span>{{item.gameName}}</span>
            <img src="@/assets/img/77.png" />
            <img src="@/assets/img/99.png" />
            <div class="text">平台 ：{{item.pingtai}}</div>
            <div class="text">说明 ：{{item.explain}}</div>
            <div class="score">
              <scoreTotal :scoreTotal="item.ScoreTotal+''"></scoreTotal>
            </div>
          </div>
        </div>
        <!-- 进度条 -->
        <div class="progress">
          <div v-for="(i, value) in item.Score" :key="value" class="progressItem">
            <span>{{i.title}}</span>
            <Progress :score="i.score+''"></Progress>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="game_home_right">
        <el-tabs type="border-card" class="tabs">
          <el-tab-pane label="游戏简介">
            <div class="game_home_right_b">
              <div>
                {{item.gameJianjie}}
                <div>查看详细>></div>
              </div>
              <div>
                <img src="@/assets/img/1111.jpg" />
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="游戏参数">
            <div class="game_home_right_b">
              <div>
                {{item.gameJianjie}}
                <div>查看详细>></div>
              </div>
              <div>
                <img src="@/assets/img/1111.jpg" />
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import scoreTotal from "_c/scoreTotal";
import Progress from "_c/Progress";
export default {
  name: "gamesWrapCenter",
  props: {
    gameInfo: {
      type: Array,
      required: true
    }
  },
  components: {
    scoreTotal,
    Progress
  }
};
</script>
<style lang='less' scoped>
.game_home {
  border: 1px solid rgba(198, 198, 198, 1);
  display: flex;
  margin-top: 10px;
  .game_home_left {
    flex: 3;
    border-right: 1px solid rgba(198, 198, 198, 1);
  }
  .game_home_right {
    flex: 4;
  }
}
.left_home {
  display: flex;
  .left_home_img {
    flex: 1;
    border: 1px solid rgba(221, 221, 221, 1);
    margin: 10px;
    img {
      width: 100%;
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
    }
  }
  div:nth-child(2) {
    flex: 3;
    img {
      width: 24px;
      height: 24px;
    }
    span {
      padding: 0 20px 0 10px;
      box-sizing: border-box;
      font-size: 20px;
      line-height: 150%;
      font-weight: bold;
      color: rgba(3, 92, 193, 1);
    }
    .text {
      font-size: 14px;
      color: rgba(80, 80, 80, 1);
      text-align: center;
      margin-top: 10px;
    }
    .score {
      font-size: 14px;
      width: 80%;
      margin: 10px auto;
    }
  }
}
.progress {
  display: flex;
  flex-wrap: wrap;
  .progressItem {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    span {
      color: rgba(80, 80, 80, 1);
      font-size: 14px;
      line-height: 150%;
      margin: 10px;
    }
  }
}
.game_home_right {
  .game_home_right_a {
    display: flex;
    div:nth-child(n) {
      width: 50%;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 16px;
      font-weight: bold;
      div {
        color: rgba(80, 80, 80, 1);
      }
    }
  }
  .game_home_right_b {
    display: flex;
    div:nth-child(1) {
      flex: 5;
      color: rgba(138, 138, 138, 1);
      font-size: 14px;
      line-height: 200%;
      text-align: left;
      margin-left: 5px;
    }
    div:nth-child(2) {
      flex: 2;
      padding: 10px;
      img {
        width: 100%;
      }
    }
  }
}
/deep/.el-tabs--border-card {
  box-shadow: none;
  border: none;
}
/deep/.el-tabs__nav {
    width: 100%;
    color: rgba(80, 80, 80, 1);
    .el-tabs__item {
      width: 50%;
      text-align: center;
      background-color: rgba(224, 224, 224, 0.79);
    }
  }
</style>