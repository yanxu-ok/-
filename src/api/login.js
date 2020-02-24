import axios from '_u/request';

// User 用户名
// Pwd 密码
export const Userlogin = (User, Pwd) => {
    return axios.post(
        '/api/User/Login', {
            LoginUser: User,
            LoginPwd: Pwd
        }
    );
};