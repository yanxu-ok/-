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
        <gameWrap :gameInfo="gameInfo" @clickChange="change"></gameWrap>
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="画面">
                    <el-input v-model.number="form.EvaluationHuamian"></el-input>
                </el-form-item>
                <el-form-item label="体验">
                    <el-input v-model.number="form.EvaluationTiyan"></el-input>
                </el-form-item>
                <el-form-item label="互动">
                    <el-input v-model.number="form.EvaluationHudong"></el-input>
                </el-form-item>
                <el-form-item label="其他">
                    <el-input v-model.number="form.EvaluationQita"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import gameWrap from '_v/GameEvaluation/Modules/gameWrap';
import { EvaluationList } from '@/api/Evaluation/EvaluationList';
import { EvaluationAdd } from '@/api/Evaluation/EvaluationAdd';
import { UserGetId } from '@/api/User/UserGetId';
export default {
    name: 'GameEvaluation',
    components: {
        gameWrap
    },
    data() {
        return {
            gameInfo: [],
            editVisible: false,
            form: {},
            userId: null
        };
    },
    created() {
        this.getList();
        //查询用户的ID
        let username = localStorage.getItem('my_username');
        //获取用户的id
        UserGetId(username)
            .then(res => {
                this.userId = res;
            })
            .catch(() => {});
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
        },
        //点击发表评测
        change(gameId) {
            this.editVisible = true;
            this.form.GameId = gameId;
            this.form.UserId = this.userId;
        },
        //发表评测请求
        saveEdit() {
            this.editVisible = false;
            EvaluationAdd(this.form)
                .then(res => {
                    if (res == 200) {
                        this.$message.success('发表成功');
                        this.getList();
                    } else {
                        this.$message.error(`发表失败`);
                    }
                })
                .catch(() => {});
        }
    }
};
</script>
<style lang='less' scoped>
</style>    