import axios from '_u/request';

//user 用户对象
export const UserDel = (userId) => {
    return axios.post(
        `/api/User/UserDel?userId=${userId}`
    );
};