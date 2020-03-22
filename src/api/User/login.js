import axios from '_u/request';

// User 用户名
// Pwd 密码
//date 当前日期
export const Userlogin = (User, Pwd, date) => {
    return axios.post(
        `/api/User/Login?date=${date}`, {
            LoginUser: User,
            LoginPwd: Pwd
        }
    );
};