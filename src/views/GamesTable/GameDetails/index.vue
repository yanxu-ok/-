<template>
    <div>
        <!-- 图标 -->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 游戏详情
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="games_wrap_center">
            <gamesWrapCenter :gameInfo="gameInfo"></gamesWrapCenter>
        </div>
    </div>
</template>
<script>
import gamesWrapCenter from '_v/GamesTable/GameDetails/Modules/gamesWrapCenter.vue';
export default {
    name: 'GameDetails',
    components: {
        gamesWrapCenter
    },
    data() {
        return {
            gameInfo: [
                {
                    id: 1,
                    gameName: '英雄联盟',
                    ScoreTotal: 10,
                    pingtai: 'STEAM EPIC UPLAY WEGAME',
                    explain: 'EA Account （支持与 Steam 账户关联',
                    Score: [
                        { id: 1, title: '体验指数', score: 10 },
                        { id: 1, title: '专家指数', score: 10 },
                        { id: 1, title: '媒体指数', score: 10 },
                        { id: 1, title: '画面指数', score: 10 },
                        { id: 1, title: '玩家指数', score: 10 }
                    ],

                    gameJianjie:
                        '建立起由工厂和机器组成的庞大且相互连接的工业网络。有效的资源运输对于您作为自动化工程师的成功至关重要。利用您可以使用的所有工具，包括矿车，无人机，卡车，火车和货运火箭。利用您的创造力来规划高效的机器物流网络，以形成机械的生产超级有机体。建立起由工厂和机器组成的庞大且相互连接的工业网络。有效的资源运输对于您作为自动化工程师的成功至关重要。利用您可以使用的所有工具，包括矿车，无人机....'
                }
            ]
        };
    },
    methods: {}
};
</script>
<style lang='less' scoped>
</style>    