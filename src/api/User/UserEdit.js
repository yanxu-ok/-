import axios from '_u/request';

//user 用户对象
export const UserEdit = (user) => {
    return axios.post(
        '/api/User/UserEdit', user
    );
};