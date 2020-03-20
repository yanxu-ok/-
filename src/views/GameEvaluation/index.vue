<template>
    <div>
        <!-- 图标 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 游戏评测
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <gameWrap :gameInfo="gameInfo"></gameWrap>
    </div>
</template>
<script>
import gameWrap from '_v/GameEvaluation/Modules/gameWrap';
import { EvaluationList } from '@/api/Evaluation/EvaluationList';
export default {
    name: 'GameEvaluation',
    components: {
        gameWrap
    },
    data() {
        return {
            gameInfo: []
        };
    },
    created() {
        this.getList();
    },
    methods: {
        //获取列表
        getList() {
            EvaluationList()
                .then(res => {
                    res.forEach((item, index) => {
                        let arr = [];
                        arr.push({ id: index + 0.1, title: '画面', score: item.evaluationHuamian });
                        arr.push({ id: index + 0.2, title: '体验', score: item.evaluationTiyan });
                        arr.push({ id: index + 0.3, title: '互动', score: item.evaluationHudong });
                        arr.push({ id: index + 0.4, title: '其他', score: item.evaluationQita });
                        item.fourScore = arr;
                    });
                    this.gameInfo = res;
                })
                .catch(() => {});
        }
    }
};
</script>
<style lang='less' scoped>
</style>    