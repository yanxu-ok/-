<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">游戏后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-alert></el-alert>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="param.password">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm">登录</el-button>
                    <el-button type="primary" @click="dialogVisible = true">注册</el-button>
                </div>
            </el-form>
        </div>
        <el-dialog title="注册账号" :visible.sync="dialogVisible" width="30%">
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
    </div>
</template>

<script>
import { Userlogin } from '@/api/User/login';
import { UserAdd } from '@/api/User/UserAdd';
export default {
    data: function() {
        return {
            form: {},
            dialogVisible: false,
            param: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm() {
            let date = new Date();
            let year = date.getFullYear();
            //月
            let month = date.getMonth() + 1;
            //日
            let day = date.getDate();
            let rq = year + '-' + month + '-' + day;
            if (this.param.username == '' || this.param.password == '') {
                this.$message.error('用户名或密码不能为空');
            } else {
                Userlogin(this.param.username, this.param.password, rq)
                    .then(res => {
                        localStorage.setItem('my_username', this.param.username);
                        localStorage.setItem('isAdmin', res.isAdmin);
                        localStorage.setItem('userId', res.userId);
                        this.$router.push('/dashboard');
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        this.$message.error('用户名或密码错误');
                    });
            }
        },
        //添加用户
        saveAdd() {
            this.dialogVisible = false;
            UserAdd(this.form).then(res => {
                if (res == 200) {
                    this.$message.success('注册成功');
                    this.param.username = this.form.loginUser;
                } else {
                    this.$message.error('注册失败');
                }
            });
        }
    }
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
    display: flex;
}
.login-btn button {
    width: 50%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>