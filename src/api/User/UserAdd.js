import axios from '_u/request';

//user 用户对象
export const UserAdd = (user) => {
    return axios.post(
        '/api/User/UserAdd', user
    );
};