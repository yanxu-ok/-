import axios from '_u/request';

// 
export const Userlogin = (User, Pwd) => {
    return axios.post(
        '/api/User/Login', {
            LoginUser: User,
            LoginPwd: Pwd
        }
    );
};