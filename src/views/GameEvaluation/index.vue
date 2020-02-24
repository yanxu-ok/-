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
export default {
    name: 'GameEvaluation',
    components: {
        gameWrap,
    },
    data() {
        return {
            gameInfo: [
                {
                    id: 1,
                    title: '英雄联盟',
                    gameContent: '祖安打招呼方式',
                    fourScore: [
                        { id: 1.1, title: '画面', score: 2 },
                        { id: 1.2, title: '体验', score: 9 },
                        { id: 1.3, title: '互动', score: 7 },
                        { id: 1.4, title: '其他', score: 4 }
                    ],
                    scoreTotal: 10
                },
                {
                    id: 2,
                    title: 'qq飞车',
                    gameContent: 'S车限时赠送',
                    fourScore: [
                        { id: 2.1, title: '画面', score: 9 },
                        { id: 2.2, title: '体验', score: 4 },
                        { id: 2.3, title: '互动', score: 3 },
                        { id: 2.4, title: '其他', score: 7 }
                    ],
                    scoreTotal: 8
                }
            ]
        };
    },
    methods: {}
};
</script>
<style lang='less' scoped>
</style>    