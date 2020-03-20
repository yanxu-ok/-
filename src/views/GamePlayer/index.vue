<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 账号管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="loginUser" label="用户名" align="center"></el-table-column>
            <el-table-column prop="loginPwd" label="密码" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="btn_1">
            <el-button @click="dialogVisible = true">添加账号</el-button>
        </div>

        <el-dialog title="添加账号" :visible.sync="dialogVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="用户名">
                    <el-input v-model="form.loginUser"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.loginPwd"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveAdd">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="添加账号" :visible.sync="dialogVisible1" width="30%">
            <el-form ref="form" :model="form1" label-width="70px">
                <el-form-item label="用户名">
                    <el-input v-model="form1.loginUser"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form1.loginPwd"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import { UserList } from '@/api/User/UserList';
import { UserAdd } from '@/api/User/UserAdd';
import { UserEdit } from '@/api/User/UserEdit';
import { UserDel } from '@/api/User/UserDel';
export default {
    name: 'GamePlayer',
    data() {
        return {
            dialogVisible: false,
            dialogVisible1: false,
            tableData: [],
            form: {},
            form1: {}
        };
    },
    created() {
        this.getUserList();
    },
    methods: {
        getUserList() {
            UserList()
                .then(res => {
                    this.tableData = res;
                })
                .catch(e => e);
        },
        handleEdit(index, row) {
            this.dialogVisible1 = true;
            this.form1 = row;
        },
        //删除
        handleDelete(index, row) {
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    UserDel(row.userId)
                        .then(res => {
                            if (res == 200) {
                                this.$message.success('删除成功');
                                this.getUserList();
                            } else {
                                this.$message.error('删除失败');
                            }
                        })
                        .catch(() => {});
                })
                .catch(() => {});
        },
        //添加
        saveAdd() {
            this.dialogVisible = false;
            UserAdd(this.form).then(res => {
                if (res == 200) {
                    this.$message.success('添加成功');
                    this.getUserList();
                } else {
                    this.$message.error('添加失败');
                }
            });
        },
        //修改
        saveEdit() {
            this.dialogVisible1 = false;
            UserEdit(this.form1).then(res => {
                if (res == 200) {
                    this.$message.success('修改成功');
                    this.getUserList();
                } else {
                    this.$message.error('修改失败');
                }
            });
        }
    }
};
</script>
<style lang='less' scoped>
.btn_1 {
    text-align: right;
}
</style>