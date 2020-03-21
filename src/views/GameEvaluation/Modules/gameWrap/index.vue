<template>
    <div>
        <div class="games-wrap" v-for="(item, index) in gameInfo" :key="index">
            <!--左-->
            <div class="games_wrap_left">
                <img src="@/assets/img/43.jpg" />
            </div>
            <!-- 右侧 -->
            <div class="games_wrap_right">
                <!-- 头部 -->
                <div>
                    <div>{{item.gameName}}</div>
                    <div>
                        <img src="@/assets/img/77.png" />
                    </div>
                    <div>
                        <img src="@/assets/img/99.png" />
                    </div>
                    <!-- 综合评测 -->
                    <scoreTotal :scoreTotal="item.average+''" :count="item.count"></scoreTotal>
                    <input
                        type="button"
                        value="发表评测"
                        v-if="isAdmin != 1"
                        @click="clickChange(item.gameId)"
                    />
                </div>

                <hr />
                <!-- 中间内容 -->
                <!-- <div class="center_content">
          <img src="@/assets/img/20.png" />
          <span>{{item.gameContent}}</span>
                </div>-->
                <!-- 评分 -->
                <div class="score">
                    <div class="score_ing" v-for="(i, value) in item.fourScore" :key="value">
                        <span>{{i.title}}:</span>
                        <score :score="i.score+''" class="score_ing_score"></score>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import scoreTotal from '_c/scoreTotal';
import score from '_c/Score';
export default {
    name: 'gameWrap',
    props: {
        gameInfo: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isAdmin: null
        };
    },
    components: {
        scoreTotal,
        score
    },
    created() {
        this.isAdmin = localStorage.getItem('isAdmin');
    },
    methods: {
        clickChange(gameId) {
            this.$emit('clickChange', gameId);
        }
    }
};
</script>
<style lang='less' scoped>
.games-wrap {
    margin-top: 15px;
    display: flex;
    // border: 1px solid black;
}
.games_wrap_left {
    border: 1px solid rgba(204, 204, 204, 1);
    flex: 1;
    margin-left: 3%;
    img {
        width: 100%;
        height: 100%;
        padding: 14px;
        box-sizing: border-box;
    }
}
.games_wrap_right {
    flex: 5;
    margin-left: 1%;
    div:nth-child(1) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        div:nth-child(1) {
            color: rgba(3, 92, 193, 1);
            font-weight: bold;
            font-size: 18px;
            align-self: center;
        }
        div:nth-child(2) {
            align-self: flex-end;
            img {
                width: 25px;
                height: 25px;
            }
        }
        div:nth-child(3) {
            align-self: flex-end;
            img {
                width: 25px;
                height: 25px;
            }
        }
    }
}
input {
    color: rgba(255, 254, 254, 1);
    background-color: rgba(3, 92, 193, 1);
    border: none;
    border-radius: 18px;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    padding: 5px 15px;
    cursor: pointer;
    margin-right: auto;
    position: absolute;
    right: 1px;
}
hr {
    border: 1px dashed rgba(202, 195, 195, 1);
    margin-top: 5px;
}
.center_content {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    span {
        margin-left: 10px;
        font-size: 14px;
        line-height: 150%;
        text-align: left;
    }
}
.score {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .score_ing {
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-left: 10px;
        .score_ing_score {
            margin-left: 10px;
        }
    }
}
</style>